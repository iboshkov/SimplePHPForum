(function () {
    angular
        .module('forums')
        .controller('IndexController', IndexController);

    IndexController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService", "BreadcrumbsService", "ForumService"];

    function IndexController($scope, $http, $log, $rootScope, UserService, BreadcrumbsService, ForumService) {
        ForumService.getAll().then(function(data) {
            $scope.forums = data;
        });

        console.log("Getting forums")
    }
})();