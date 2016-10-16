/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    window.app = angular.module("forums", ['angularMoment', 'satellizer', 'angular-loading-bar']);

    app.config(function ($authProvider) {
        $authProvider.httpInterceptor = function () {
            return true;
        };

        $authProvider.withCredentials = false;
        $authProvider.tokenRoot = null;
        $authProvider.baseUrl = '/';
        $authProvider.loginUrl = '/oauth/token';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.tokenName = 'access_token';
        $authProvider.tokenPrefix = 'satellizer';
        $authProvider.tokenHeader = 'Authorization';
        $authProvider.tokenType = 'Bearer';
        $authProvider.storageType = 'localStorage';
    });


    app.run(function ($rootScope, $http, $log, $auth, userService) {
        $rootScope.breadcrumbPath = [{name: "Home", url: "/"}];
        $rootScope.loggedIn = function (sender) {
            return userService.isLoggedIn();
        };

        $rootScope.$on("user:updated", function (data) {
            $rootScope.loggedInUser = userService.currentUser();
        });
        $log.info("App run");
    });


    app.factory("userService", function ($log, $http, $auth, $q, $rootScope) {
        $log.info("User service init");
        var loggedInUser = null;
        var service = {
            logout: function () {
                loggedInUser = null;
                $auth.logout();
            },
            isLoggedIn: function () {
                return $auth.isAuthenticated();
            },
            getUser: function () {
                $http.get("/api/user/")
                    .then(function (response) {
                        loggedInUser = response.data;
                        $rootScope.$broadcast('user:updated', loggedInUser);
                    }, function (response) {
                        $log.info("Error ?");
                    });
            },
            login: function (user) {
                $auth.login(user).then(function (response) {
                    service.getUser();
                }).catch(function (response) {

                });
            },
            currentUser: function () {
                return loggedInUser;
            }

        };

        service.getUser();

        return service;
    });



    app.controller("PostController", function ($scope, $http, $log, $rootScope, userService) {
        $log.info("Logged in user");

        $scope.post = {
            content: "test content",
            user: {
                username: "1234",
            }
        };

        userService.getUser();

        $scope.$on("user:updated", function (data) {
            $log.info("Updating post controller");
            $scope.post.user = userService.currentUser();
        });

        $scope.addPost = function addPost(thread) {
            $log.info("Adding post" );
            $log.info(thread);
           // $http.get("/api/forum/" + slug + "?page=" + page_num)
            $scope.post.title = thread.title;
            $scope.post.parent_id = thread.id;
            $log.info("Putting");
            $log.info($scope.post);
            $http.put("/api/post/add/", $scope.post).then(function(response){
                $log.info("Tried to put");
                $log.info(response);
            });
        }
    });

    app.controller("LoginController", function ($scope, $log, $auth, $http, $rootScope, userService) {
        this.user = {
            username: "test@example.com",
            password: "secret",
            grant_type: "password",
            client_id: "3",
            client_secret: "XaRZHJWdhiSIrMg3wm2XiSAl7A5ldgM6C4EejYvj",
            scope: "*",
        };

        this.logOut = function () {
            userService.logout();
        };

        this.tryLogin = function () {
            $log.info(this.user);
            $log.info(this.user.username);
            $log.info(this.user.password);
            userService.login(this.user);
        };
        $log.info("Login ctrl");
    });

    function addForumBreadcrumbs($rootScope, forumData) {
        if (forumData.parent) {
            $rootScope.breadcrumbPath.push({name: forumData.parent.title, url: "/forum/" + forumData.parent.slug});
        }
        $rootScope.breadcrumbPath.push({name: forumData.title, url: "/forum/" + forumData.slug});
    }

    app.controller("IndexController", function ($scope, $http, $log) {
        $http.get("/api/forums")
            .then(function (response) {
                $scope.forums = response.data;
            });
    });

    app.controller("ForumController", function ($scope, $http, $log, $rootScope) {
        $scope.current_page = 0;
        $scope.init = function (slug, page) {
            $scope.slug = slug;
            $scope.loadPage(slug, page);
        };

        $scope.loadPage = function (slug, page_num) {
            $log.info("Loading page " + slug + "|" + page_num);
            if (slug == null)
                slug = $scope.slug;
            $http.get("/api/forum/" + slug + "?page=" + page_num)
                .then(function (response) {
                    var addBreadcrumbs = $scope.data == null;
                    $scope.data = response.data;
                    $scope.current_page = page_num;
                    if (addBreadcrumbs) {
                        addForumBreadcrumbs($rootScope, $scope.data.forum);
                    }
                }, function (response) {
                    $log.info("Error ?");
                });
        };
    });
    app.filter('range', function () {
        return function (input, total) {
            total = parseInt(total);

            for (var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        };
    });

    app.directive('pagination', function () {
        return {
            restrict: "E",
            scope: {
                pageData: '=',
                callback: '&',
            },
            templateUrl: "/angular/pagination",
        };
    });

    app.controller("PaginationController", function ($scope) {
        $scope.Math = window.Math;
    });


    app.directive('breadcrumbs', function () {
        return {
            restrict: "E",
            scope: {
                path: '=',
            },
            templateUrl: "/angular/breadcrumbs",
        };
    });

    app.directive('post', function ($rootScope) {
        return {
            restrict: "E",
            scope: {
                data: '=',
                hideControls: '=',
            },


            templateUrl: "/angular/post",
        };
    });
    app.directive('postForm', function ($rootScope, $log) {
        return {
            restrict: "E",
            scope: {
                data: '=',
            },
            link: function($scope, $element, $attrs) {
                $log.info("Hello?")
                console.log("Hello");
                $scope.thread = $attrs.data;
                console.log($attrs.data);

            },
            templateUrl: "/angular/post_form",
        };
    });

    app.controller("ThreadController", function ($scope, $http, $log, $rootScope) {
        $scope.current_page = 0;
        $scope.init = function (slug, page) {
            $scope.slug = slug;
            $scope.loadPage(slug, page);
        };

        $scope.loadPage = function (slug, page_num) {
            if (slug == null)
                slug = $scope.slug;
            $http.get("/api/thread/" + slug + "?page=" + page_num)
                .then(function (response) {
                    var addBreadcrumbs = $scope.data == null;
                    $scope.data = response.data;
                    if (addBreadcrumbs) {
                        addForumBreadcrumbs($rootScope, $scope.data.thread.forum);
                        $rootScope.breadcrumbPath.push({name: $scope.data.thread.title, url: "/"});
                    }
                    $scope.current_page = page_num;
                }, function (response) {
                    $log.info("Error ?");
                });
        };
    });


    console.log("Hello");
})();
