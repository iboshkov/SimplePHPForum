(function () {
    console.log("Pagination controller");
    angular
        .module('forums')
        .controller('PaginationController', PaginationController);

    PaginationController.$inject = ["$scope"];

    function PaginationController($scope) {
        $scope.maxPages = 0;
        $scope.roundStart = 0;
        $scope.roundEnd = 0;
        $scope.Math = window.Math;

        $scope.$watch('pageData', function (newValue, oldValue) {
            console.log('pageData change:', newValue);
            if (newValue) {
                $scope.maxPages = Math.ceil(newValue.total / newValue.per_page);
                console.log('New max pages:', $scope.maxPages);
                $scope.roundStart = Math.clamp(newValue.current_page - 3, 0, $scope.maxPages);
                $scope.roundEnd = Math.clamp(newValue.current_page + 2, 0, $scope.maxPages);
                if(!$scope.$digest) {
                    $scope.$apply();
                }
            }
        }, true);
    }
})();
