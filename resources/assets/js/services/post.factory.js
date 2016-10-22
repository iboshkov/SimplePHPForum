(function () {
    angular
        .module('forums')
        .factory('PostService', PostService);

    PostService.$inject = ["$log", "$http", "$q", "$rootScope"];

    function PostService($log, $http, $q, $rootScope) {
        var service = {
            save: saveFn
        };

        function saveFn(post) {
            var defer = $q.defer();
            $http.put("/api/post/add/", post).then(function(response){
                defer.resolve(response);
            });

            return defer.promise;
        }

        return service;
    }
})();