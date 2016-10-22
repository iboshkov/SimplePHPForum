(function () {
    angular
        .module('forums')
        .controller('BreadcrumbsController', BreadcrumbsController);

    BreadcrumbsController.$inject = ["$scope", "$http", "$log", "$rootScope", "BreadcrumbsService"];

    function BreadcrumbsController($scope, $http, $log, $rootScope, BreadcrumbsService) {

        function updateCrumbs() {
            $scope.crumbs = BreadcrumbsService.getBreadcrumbs();
        }

        BreadcrumbsService.subscribeChange($scope, updateCrumbs);
        updateCrumbs();
    }
})();