(function () {
    angular
        .module('forums')
        .factory('UserService', UserService);

    UserService.$inject = ["$log", "$http", "$auth", "$q", "$rootScope"];

    function UserService($log, $http, $auth, $q, $rootScope) {
        var loggedInUser = null;

        var service = {
            logout: logoutFn,
            isLoggedIn: isLoggedInFn,
            getUser: getUserFn,
            login: loginFn,
        };

        function logoutFn() {
            loggedInUser = null;
            $auth.logout();
        }

        function isLoggedInFn() {
            return $auth.isAuthenticated();
        }

        function loginFn(user) {
            var defer = $q.defer();
            $auth.login(user).then(function (response) {
                service.getUser();
            }).catch(function (response) {

            });
        }

        function getUserFn() {
            var defer = $q.defer();

            if (service.isLoggedIn()) {
                return $q.when(loggedInUser);
            }

            $http.get("/api/user/")
                .then(function (response) {
                    loggedInUser = response.data;

                    // TODO: Remove the need for this
                    $rootScope.$broadcast('user:updated', loggedInUser);
                    defer.resolve(loggedInUser);
                }, function (response) {
                    $log.info("Error getting logged in user.");
                });

            return defer.promise;
        }

        return service;
    }
})();