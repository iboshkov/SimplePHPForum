(function () {
    angular
        .module('forums')
        .controller('ForumController', ForumController);

    ForumController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams", "$state", "BreadcrumbsService"
    , "ForumService"];

    function ForumController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService, ForumService) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;

        ForumService.getThreads($scope.slug, $scope.page)
            .then(function (data) {
                $scope.data = data;
                BreadcrumbsService.addBreadcrumb({name: $scope.data.forum.title, type: "forum", slug: $scope.data.forum.slug});
            }, function (message) {
                $log.error(message);
            });

        $scope.goToThread = function(thread){
            $state.go("thread", {page: 1, slug: thread.slug, parentPage: $scope.page, parentSlug: $scope.slug});
        };

        $scope.loadPage = function (page_num, source) {
            $state.go("forum", {page: page_num, slug: $scope.slug});
        };
    }
})();