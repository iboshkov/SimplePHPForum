(function () {
    angular
        .module('forums')
        .controller('PostController', PostController);

    PostController.$inject = ["$scope", "$http", "$log", "$rootScope", "$sce"];

    function PostController($scope, $http, $log, $rootScope, $sce) {
        $scope.test = function() {
            $rootScope.scrollToPostArea();
        };

        $scope.content = function () {
            return $sce.trustAsHtml($scope.data.content);
        }
    }
})();