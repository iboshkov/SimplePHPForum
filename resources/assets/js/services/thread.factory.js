(function () {
    angular
        .module('forums')
        .factory('ThreadService', ThreadService);

    ThreadService.$inject = ["$log", "$http", "$q", "$rootScope"];

    function ThreadService($log, $http, $q, $rootScope) {
        var service = {
            getThreadAndPosts: getThreadAndPostsFn
        };

        function getThreadAndPostsFn(slug, page) {
            var defer = $q.defer();
            $http.get("/api/thread/" + slug + "?page=" + page)
                .then(function (response) {
                    defer.resolve(response.data);
                }, function() {
                    defer.reject({
                        message: "Error fetching threads"
                    });
                });

            return defer.promise;
        }

        return service;
    }
})();