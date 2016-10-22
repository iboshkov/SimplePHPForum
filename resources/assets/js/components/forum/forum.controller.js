(function () {
    console.log("Testing");
    angular
        .module('forums')
        .controller('ForumController', ForumController);

    ForumController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams", "$state"];

    function ForumController($scope, $http, $log, $rootScope, $stateParams, $state) {
        $scope.current_page = 0;
        $log.info($state);
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;

        $scope.loadPage = function (slug, page_num, source) {
            if (slug == null)
                slug = $scope.slug;
            $log.info("Loading page " + slug + "|" + page_num + "/" + source);
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
        $scope.loadPage($scope.slug, $scope.page, 11);

    }
})();