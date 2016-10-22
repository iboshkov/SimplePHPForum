/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    window.app = angular.module("forums", ['angularMoment', 'ckeditor', 'satellizer', 'angular-loading-bar',
        'ui.router']);

    // Services
    require("./services/user.factory");

    // Components
    require("./components/thread/thread");
    require("./components/post_form/post_form");
    require("./components/post/post");
    require("./components/login/login");
    require("./components/pagination/pagination");
    require("./components/breadcrumbs/breadcrumbs");

    require("./components/forum/forum");
    require("./components/index/index");

    // Directives
    require("./directives/scroll_if.directive");

    app.config(["$authProvider", "$urlRouterProvider", function ($authProvider, $urlRouterProvider) {
        // Route to "/" by default
        $urlRouterProvider.otherwise("/");

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
    }]);

    app.run(["$rootScope", "$http", "$log", "BreadcrumbsService", "UserService",
        function ($rootScope, $http, $log, BreadcrumbsService, UserService) {
            $rootScope.breadcrumbPath = [{name: "Home", url: "/"}];

            $rootScope.$on('$stateChangeSuccess', function (evt) {
                // Halt state change from even starting
                evt.preventDefault();
                BreadcrumbsService.resetBreadcrumbs();
                console.log("LOcation change");
            });

            UserService.getUser().then(function(user){
                console.log("User logged in");
                $rootScope.loggedInUser = user;
                console.log($rootScope.loggedInUser);

            }).catch(function(){
                console.log("User logged in - error");
            });

            $rootScope.loggedInUser = function() {
                return UserService.loggedInUser;
            };

            $rootScope.loggedIn = function() {
                return UserService.isLoggedIn();
            };

            $rootScope.scrollToElement = function (element) {
                $('html, body').animate({
                    scrollTop: $(element).offset().top
                }, 200);
            };

            $rootScope.scrollToPostArea = function () {
                $rootScope.scrollToElement("#postText");
            };

        }]);

    app.filter('range', function () {
        return function (input, min, max) {
            min = parseInt(min);
            max = parseInt(max);

            for (var i = min; i < max; i++) {
                input.push(i);
            }
            return input;
        };
    });
})();
