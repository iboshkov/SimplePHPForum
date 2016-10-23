(function () {
    angular
        .module('forums')
        .controller('ForumController', ForumController);

    ForumController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams", "$state", "BreadcrumbsService"
    , "ForumService"];

    function ForumController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService, ForumService) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;

        $scope.goToThread = function(thread){
            $state.go("thread", {page: 1, slug: thread.slug, parentPage: $scope.page, parentSlug: $scope.slug});
        };

        $scope.loadPage = function(page) {
            console.log($stateParams);
            $state.transitionTo('forum', {page: page, slug: $scope.slug}, {notify: false});
            ForumService.getThreads($scope.slug, page)
                .then(function (data) {
                    var updateBreadcrumbs = $scope.data ==  null;
                    $scope.data = data;
                    if (updateBreadcrumbs) {
                        BreadcrumbsService.addBreadcrumb({name: $scope.data.forum.title, type: "forum", slug: $scope.data.forum.slug});
                    }
                }, function (message) {
                    $log.error(message);
                });
        }

        $scope.loadPage($scope.page);
    }
})();
