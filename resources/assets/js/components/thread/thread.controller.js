(function () {
    angular
        .module('forums')
        .controller('ThreadController', ThreadController);

    ThreadController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams",
        "$state", "BreadcrumbsService"];

    function ThreadController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;
        $scope.parentPage = $stateParams.parentPage;
        $scope.parentSlug = $stateParams.parentSlug;
        console.log($scope.parentSlug);

        // TODO: Refactor into a service
        $http.get("/api/thread/" + $scope.slug + "?page=" + $scope.page)
            .then(function (response) {
                $scope.data = response.data;
                $scope.parentSlug = $scope.data.thread.forum.slug;
                BreadcrumbsService.addBreadcrumb({name: $scope.data.thread.forum.title, type: "forum", slug: $scope.data.thread.forum.slug});
                BreadcrumbsService.addBreadcrumb({name: $scope.data.thread.title, type: "thread", slug: $scope.data.thread.slug});
            }, function (response) {
                $log.info("Error ?");
            });

        $scope.loadPage = function (page_num, source) {
            $state.go("thread", {page: page_num, slug: $scope.slug});
        };
    }
})();