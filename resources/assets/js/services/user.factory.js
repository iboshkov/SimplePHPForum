(function () {
    console.log("Testing");
    angular
        .module('forums')
        .factory('UserService', UserService);

    UserService.$inject = ["$log", "$http", "$auth", "$q", "$rootScope"];

    function UserService($log, $http, $auth, $q, $rootScope) {
        $log.info("User service init");
        var loggedInUser = null;
        var service = {
            logout: function () {
                loggedInUser = null;
                $auth.logout();
            },
            isLoggedIn: function () {
                return $auth.isAuthenticated();
            },
            getUser: function () {
                $http.get("/api/user/")
                    .then(function (response) {
                        loggedInUser = response.data;
                        $rootScope.$broadcast('user:updated', loggedInUser);
                    }, function (response) {
                        $log.info("Error ?");
                    });
            },
            login: function (user) {
                $auth.login(user).then(function (response) {
                    service.getUser();
                }).catch(function (response) {

                });
            },
            currentUser: function () {
                return loggedInUser;
            }

        };

        service.getUser();

        return service;
    }
})();