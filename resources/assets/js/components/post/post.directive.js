(function () {
    angular
        .module('forums')
        .directive('post', PostDirective);

    PostDirective.$inject = [];

    function PostDirective() {
        return {
            restrict: "E",
            scope: {
                data: '=',
                hideControls: '=',
            },


            templateUrl: "/angular/post",
        };
    }
})();