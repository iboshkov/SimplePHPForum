(function () {
    angular
        .module('forums')
        .controller('IndexController', IndexController);

    IndexController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService"];

    function IndexController($scope, $http, $log, $rootScope, UserService) {
        $http.get("/api/forums")
            .then(function (response) {
                $scope.forums = response.data;
            });
    }
})();