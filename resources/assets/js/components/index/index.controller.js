(function () {
    angular
        .module('forums')
        .controller('IndexController', IndexController);

    IndexController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService", "BreadcrumbsService"];

    function IndexController($scope, $http, $log, $rootScope, UserService, BreadcrumbsService) {
        $http.get("/api/forums")
            .then(function (response) {
                $scope.forums = response.data;
            });
    }
})();