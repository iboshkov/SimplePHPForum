(function () {
    angular
        .module('forums')
        .directive('scrollIf', ScrollIfDirective);

    ScrollIfDirective.$inject = ["$timeout", "$log"];

    function ScrollIfDirective($timeout, $log) {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $attrs.$observe('scrollIf', function(newValue, oldValue) {
                    console.log('scroll change:', newValue);
                    if (newValue) {
                    }
                }, true);
                function inner() {
                    var element = $attrs.id;
                    if ($attrs.scrollIf != "true"){
                        return;
                    }
                    console.log("ScrollIf scrolling to " + element);
                    console.log(element);
                    $('html, body').animate({
                        scrollTop: $("#" + element).offset().top
                    }, 200);
                }

                $timeout(inner, 0);
            },
        };
    }
})();
