(function () {
    angular
        .module('forums')
        .controller('ThreadController', ThreadController);

    ThreadController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams",
        "$state", "BreadcrumbsService", "ThreadService"];

    function ThreadController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService, ThreadService) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;

        ThreadService.getThreadAndPosts($scope.slug, $scope.page)
            .then(function (data) {
                $scope.data = data;
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