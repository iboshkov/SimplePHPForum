(function () {
    angular
        .module('forums')
        .directive('postForm', PostFormDirective);

    PostFormDirective.$inject = ["$rootScope", "$log"];

    function PostFormDirective($rootScope, $log) {
        return {
            restrict: "E",
            scope: {
                data: '=',
            },
            link: function($scope, $element, $attrs) {
                $scope.thread = $attrs.data;
            },
            templateUrl: "/angular/post_form",
        };
    }
})();
