(function () {
    angular
        .module('forums')
        .factory('ForumService', ForumService);

    ForumService.$inject = ["$log", "$http", "$q", "$rootScope"];

    function ForumService($log, $http, $q, $rootScope) {
        var service = {
            getAll: getAllFn,
            getThreads: getThreadsFn,
        };

        function getAllFn() {
            var defer = $q.defer();

            $http.get("/api/forums")
                .then(function (response) {
                    defer.resolve(response.data);
                }, function() {
                    defer.reject({
                        message: "Error fetching forums"
                    });
                });

            return defer.promise;
        }


        function getThreadsFn(slug, page) {
            var defer = $q.defer();

            $http.get("/api/forum/" + slug + "?page=" + page)
                .then(function (response) {
                    defer.resolve(response.data);
                }, function() {
                    defer.reject({
                        message: "Error fetching forum threads"
                    });
                });

            return defer.promise;
        }

        return service;
    }
})();