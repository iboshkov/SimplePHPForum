(function () {
    angular
        .module('forums')
        .controller('ForumController', ForumController);

    ForumController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams", "$state", "BreadcrumbsService"];

    function ForumController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;

        // TODO: Refactor into a service
        $http.get("/api/forum/" + $scope.slug + "?page=" + $scope.page)
            .then(function (response) {
                $scope.data = response.data;
                BreadcrumbsService.addBreadcrumb({name: $scope.data.forum.title, type: "forum", slug: $scope.data.forum.slug});
            }, function (response) {
                $log.info("Error ?");
            });

        $scope.goToThread = function(thread){
            $state.go("thread", {page: 1, slug: thread.slug, parentPage: $scope.page, parentSlug: $scope.slug});
        };

        $scope.loadPage = function (page_num, source) {
            $state.go("forum", {page: page_num, slug: $scope.slug});
        };
    }
})();