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
            templateUrl: "/angular/pagination",
        };
    }
})();