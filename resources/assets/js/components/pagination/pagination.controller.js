(function () {
    console.log("Pagination controller");
    angular
        .module('forums')
        .controller('PaginationController', PaginationController);

    PaginationController.$inject = ["$scope"];

    function PaginationController($scope) {
        $scope.Math = window.Math;
    }
})();