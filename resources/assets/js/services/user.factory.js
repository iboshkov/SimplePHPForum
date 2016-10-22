(function () {
    angular
        .module('forums')
        .factory('UserService', UserService);

    UserService.$inject = ["$log", "$http", "$auth", "$q", "$rootScope"];

    function UserService($log, $http, $auth, $q, $rootScope) {
        var loggedInUserObj = null;

        var service = {
            logout: logoutFn,
            isLoggedIn: isLoggedInFn,
            getUser: getUserFn,
            login: loginFn,
            loggedInUser: loggedInUserObj,
        };

        function logoutFn() {
            loggedInUserObj = null;
            $auth.logout();
        }

        function isLoggedInFn() {
            return $auth.isAuthenticated();
        }

        function loginFn(user) {
            var defer = $q.defer();
            $auth.login(user)
                .then(function (response) {
                    defer.resolve(response, service.getUser());
                })
                .catch(function (response) {
                    defer.reject({message: "Error logging in"}, response);
                });

            return defer.promise;
        }

        function getUserFn() {
            var defer = $q.defer();

            if (service.isLoggedIn() && loggedInUserObj != null) {
                console.log("User logged in - returning object");
                console.log(loggedInUserObj);
                return $q.when(loggedInUserObj);
            }

            $http.get("/api/user/")
                .then(function (response) {
                    loggedInUserObj = response.data;
                    console.log("Got user");
                    console.log(loggedInUserObj);

                    // TODO: Remove the need for this
                    $rootScope.$broadcast('user:updated', loggedInUserObj);
                    defer.resolve(loggedInUserObj);
                }, function (response) {
                    defer.reject({message: "Error getting logged in user."});
                });

            return defer.promise;
        }

        return service;
    }
})();