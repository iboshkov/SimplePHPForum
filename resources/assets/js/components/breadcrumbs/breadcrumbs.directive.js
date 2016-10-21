(function () {
    angular
        .module('forums')
        .directive('breadcrumbs', BreadcrumbsDirective);

    BreadcrumbsDirective.$inject = [];

    function BreadcrumbsDirective() {
        return {
            restrict: "E",
            scope: {
                path: '=',
            },
            templateUrl: "/angular/breadcrumbs",
        };
    }
})();