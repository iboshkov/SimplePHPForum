(function () {
    angular
        .module('forums')
        .controller('ThreadController', ThreadController);

    ThreadController.$inject = ["$scope", "$http", "$log", "$rootScope"];

    function ThreadController($scope, $http, $log, $rootScope) {
        $scope.current_page = 0;
        $scope.numPages = 0;
        $scope.init = function (slug, page) {
            $scope.slug = slug;
            $log.info("Pages: " + $scope.pageData);
            $scope.loadPage(slug, page);
        };

        $scope.$on("posts:updated", function (data) {
            $log.info("Refreshing posts");
            // Todo: get num pages before loading last page
            $scope.loadPage(null, $scope.numPages);
        });

        $scope.loadPage = function (slug, page_num) {
            if (slug == null)
                slug = $scope.slug;
            $http.get("/api/thread/" + slug + "?page=" + page_num)
                .then(function (response) {
                    var addBreadcrumbs = $scope.data == null;
                    $scope.data = response.data;
                    $scope.numPages = Math.ceil($scope.data.posts.total / $scope.data.posts.per_page);
                    $log.info("pages");
                    $log.info($scope.data);
                    if (addBreadcrumbs) {
                        $rootScope.addForumBreadcrumbs($rootScope, $scope.data.thread.forum);
                        $rootScope.breadcrumbPath.push({name: $scope.data.thread.title,
                            url: "/thread/" + $scope.data.thread.slug});
                    }
                    $scope.current_page = page_num;
                }, function (response) {
                    $log.info("Error ?");
                });
        };
    }
})();