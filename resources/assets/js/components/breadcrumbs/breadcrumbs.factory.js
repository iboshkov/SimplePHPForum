(function () {
    angular
        .module('forums')
        .factory('BreadcrumbsService', BreadcrumbsService);

    BreadcrumbsService.$inject = ["$log", "$http", "$auth", "$q", "$rootScope"];

    function BreadcrumbsService($log, $http, $auth, $q, $rootScope) {
        var path = [];

        var service = {
            addBreadcrumb: addBreadrumbFn,
            resetBreadcrumbs: resetBreadcrumbsFn,
            getBreadcrumbs: getPathFn,
            subscribeChange: subscribeFn,
            notifyChange: notifyFn,
        };

        function subscribeFn(scope, callback) {
            var handler = $rootScope.$on('BreadcrumbsService:PathChange', callback);
            scope.$on('$destroy', handler);
        }

        function notifyFn() {
            $rootScope.$emit('BreadcrumbsService:PathChange');
        }

        function addBreadrumbFn(crumb) {
            path.push(crumb);

            service.notifyChange();
        }
        
        function resetBreadcrumbsFn() {
            path = [{name: "Home", type: "index"}];
            service.notifyChange();
        }
        
        function getPathFn() {
            return path;
        }

        service.resetBreadcrumbs();

        return service;
    }
})();