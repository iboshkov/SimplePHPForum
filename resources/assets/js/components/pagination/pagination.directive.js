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
            /*link: function (scope, element, attrs) {
                scope.Math = window.Math;

                scope.$watch(function() {
                    return element.attr('pageData');
                }, function(pageData) {
                    console.log("Page data changed");
                    console.log(pageData);
                    scope.maxPages = Math.ceil(pageData.total / pageData.per_page);
                });
            },*/
            templateUrl: "/angular/pagination",
        };
    }
})();