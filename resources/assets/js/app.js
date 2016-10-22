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

    app.run(["$rootScope", "$http", "$log", "BreadcrumbsService",
        function ($rootScope, $http, $log, BreadcrumbsService) {
        $rootScope.breadcrumbPath = [{name: "Home", url: "/"}];

        $rootScope.$on('$locationChangeSuccess', function(evt) {
            // Halt state change from even starting
            evt.preventDefault();
            BreadcrumbsService.resetBreadcrumbs();
            console.log("LOcation change");

        });


        $rootScope.addForumBreadcrumbs = function($rootScope, forumData) {
            if (forumData.parent) {
                $rootScope.breadcrumbPath.push({name: forumData.parent.title, url: "/forum/" + forumData.parent.slug});
            }
            $rootScope.breadcrumbPath.push({name: forumData.title, url: "/forum/" + forumData.slug});
        };

        $rootScope.scrollToPostArea = function() {
            $log.info("Scroll to post");
            $('html, body').animate({
                scrollTop: $("#postText").offset().top
            }, 200);
        };

        $log.info("App run");
    }]);

    app.filter('range', function () {
        return function (input, total) {
            total = parseInt(total);

            for (var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        };
    });
})();
