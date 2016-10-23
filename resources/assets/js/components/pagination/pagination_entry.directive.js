(function () {
    angular
        .module('forums')
        .directive('paginationEntry', PaginationEntryDirective);

    PaginationEntryDirective.$inject = [];

    function PaginationEntryDirective() {
        return {
            restrict: "E",
            transclude: true,
            scope: {
                active: "@",
                addClass: "@",
            },
            //controller: "PaginationController",
            link: function (scope, element, attrs) {
                //scope.addClasses = attrs.addClass;
             },
            templateUrl: "/angular/pagination_entry",
        };
    }
})();
