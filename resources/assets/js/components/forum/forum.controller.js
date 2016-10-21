(function () {
    console.log("Testing");
    angular
        .module('forums')
        .controller('ForumController', ForumController);

    ForumController.$inject = ["$scope", "$http", "$log", "$rootScope"];

    function ForumController($scope, $http, $log, $rootScope) {
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
                        $rootScope.addForumBreadcrumbs($rootScope, $scope.data.forum);
                    }
                }, function (response) {
                    $log.info("Error ?");
                });
        };
    }
})();