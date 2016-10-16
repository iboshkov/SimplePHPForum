/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    window.app = angular.module("forums", ['angularMoment']);
    app.controller("IndexController", function ($scope, $http, $log) {
        $http.get("/api/forums")
            .then(function(response) {
                $scope.forums = response.data;
            });
    });

    app.controller("ForumController", function ($scope, $http, $log) {
        $scope.current_page = 0;
        $scope.init = function(slug, page) {
            $scope.slug = slug;
            $scope.loadPage(slug, page);
        };

        $scope.loadPage = function(slug, page_num) {
            $log.info("Loading page " + slug  + "|" + page_num);
            if (slug == null)
                slug = $scope.slug;
            $http.get("/api/forum/" + slug + "?page=" + page_num)
                .then(function(response) {
                    $scope.data = response.data;
                    $scope.current_page = page_num;
                    $rootScope.rootPage = 123;
                }, function(response) {
                    $log.info("Error ?");
                });
        };
    });
    app.filter('range', function() {
        return function(input, total) {
            total = parseInt(total);

            for (var i=0; i<total; i++) {
                input.push(i);
            }

            return input;
        };
    });

    app.directive('pagination', function() {
        return {
            restrict: "E",
            scope: {
                pageData: '=',
                callback: '&',
            },
            templateUrl: "/angular/pagination",
        };
    });

    app.controller("ThreadController", function ($scope, $http, $log, $rootScope) {
        $scope.current_page = 0;
        $scope.init = function(slug, page) {
            $scope.slug = slug;
            $scope.loadPage(slug, page);
        };

        $scope.loadPage = function(slug, page_num) {
            $log.info("Loading page " + slug  + "|" + page_num);
            if (slug == null)
                slug = $scope.slug;
            $http.get("/api/thread/" + slug + "?page=" + page_num)
                .then(function(response) {
                    $scope.thread = response.data;
                    $scope.current_page = page_num;
                    $rootScope.rootPage = 123;
                }, function(response) {
                    $log.info("Error ?");
                });
        };
    });


    console.log("Hello");
})();
