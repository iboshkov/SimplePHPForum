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


    app.factory("userService", function ($log, $http, $auth, $q, $rootScope) {
        $log.info("User service init");
        var loggedInUser = null;
        var service = {
            login: function (user) {
                var defer = $q.defer();
                $auth.login(user).then(function (response) {
                    loggedInUser = response.data;
                    defer.resolve(response.data);
                    $rootScope.$broadcast('user:updated', loggedInUser);
                }).catch(function (response) {

                });
                $log.info("Returning ");
                $log.info(defer);
                return defer.promise;
            },
            logout: function () {
                $auth.logout();
            },
            isLoggedIn: function () {
                return $auth.isAuthenticated();
            },
            getUser: function () {
                var defer = $q.defer();
                $http.get("/api/user/")
                    .then(function (response) {
                        loggedInUser = response.data;
                        defer.resolve(response.data);
                        $log.info("Notifying listeners with ");
                        $log.info(this.loggedInUser);
                        $rootScope.$broadcast('user:updated', loggedInUser);
                    }, function (response) {
                        $log.info("Error ?");
                    });
                return defer.promise;
            },
            currentUser: function () {
                return loggedInUser;
            }

        };

        service.getUser();

        return service;
    });

    app.run(function ($rootScope, $http, $log, $auth, userService) {
        $rootScope.breadcrumbPath = [{name: "Home", url: "/"}];
        $log.info("App run");
        $rootScope.loggedInUser = userService.currentUser;

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

        this.isAuthenticated = function () {
            return userService.isLoggedIn();
        };

        this.logOut = function () {
            userService.logout();
        };

        this.tryLogin = function () {
            $log.info(this.user);
            $log.info(this.user.username);
            $log.info(this.user.password);
            userService.login(this.user).then(function (response) {
                $log.info("Login success");

            }).catch(function (response) {
                $log.info("Login error");
            });
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

    app.directive('post', function () {
        return {
            restrict: "E",
            scope: {
                data: '=',
                hideControls: '=',
            },
            templateUrl: "/angular/post",
        };
    });
    app.directive('postForm', function () {
        function link(scope, element, attrs) {
            /*scope.post = {
             content: "test content",
             user: {
             username: "user",
             }
             }*/
        }

        return {
            restrict: "E",
            scope: {
                data: '=',
            },
            link: link,
            templateUrl: "/angular/post_form",
        };
    });

    app.controller("PostController", function ($scope, $http, $log, $rootScope, userService) {
        $log.info("Logged in user");



        $scope.post = {
            content: "test content",
            user: {
                username: "1234",
            }
        };
        $scope.$on("user:updated", function (data) {
            $log.info("User updated");
            $log.info(userService.currentUser());
            $scope.post.user = userService.currentUser();
        });
        function addPost(thread) {

        }
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
