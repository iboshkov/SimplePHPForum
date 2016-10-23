(function () {
    angular
        .module('forums')
        .directive('pagination', PaginationDirective);

    PaginationDirective.$inject = [];

    function PaginationDirective() {
        return {
            restrict: "E",
            scope: {
                pageData: '=',
                callback: '&',
            },
            controller: "PaginationController",
            templateUrl: "/angular/pagination",
        };
    }
})();
