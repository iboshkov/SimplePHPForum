(function () {
    angular
        .module('forums')
        .controller('ThreadController', ThreadController);

    ThreadController.$inject = ["$scope", "$http", "$log", "$rootScope", "$stateParams",
        "$state", "BreadcrumbsService", "ThreadService", "$anchorScroll",  "$location"];

    function ThreadController($scope, $http, $log, $rootScope, $stateParams, $state, BreadcrumbsService, ThreadService,
    $anchorScroll, $location) {
        $scope.slug = $stateParams.slug;
        $scope.page = $stateParams.page;
        console.log($stateParams);
        $scope.scrollToLast = $stateParams.scrollToLast == "true";

        $scope.loadPage = function(page) {
            $state.transitionTo('thread', {page: page, slug: $scope.slug, scrollToLast: false}, {notify: false});
            ThreadService.getThreadAndPosts($scope.slug, page)
                .then(function (data) {
                    var updateBreadcrumbs = $scope.data ==  null;
                    $scope.data = data;

                    if (updateBreadcrumbs) {
                        BreadcrumbsService.addBreadcrumb({name: $scope.data.thread.forum.title, type: "forum", slug: $scope.data.thread.forum.slug});
                        BreadcrumbsService.addBreadcrumb({name: $scope.data.thread.title, type: "thread", slug: $scope.data.thread.slug});
                    }
                }, function (response) {
                    $log.info("Error ?");
                });
        }

        $scope.loadPage($scope.page);
        //$scope.loadPage = function (page_num, source) {
        //    $state.go("thread", {page: page_num, slug: $scope.slug, scrollToLast: false});
        //};
    }
})();
