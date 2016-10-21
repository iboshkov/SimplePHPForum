(function () {
    angular
        .module('forums')
        .controller('LoginController', LoginController);

    LoginController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService"];

    function LoginController($scope, $http, $log, $rootScope, UserService) {
        this.user = {
            username: "test@example.com",
            password: "secret",
            grant_type: "password",
            client_id: "3",
            client_secret: "XaRZHJWdhiSIrMg3wm2XiSAl7A5ldgM6C4EejYvj",
            scope: "*",
        };

        this.logOut = function () {
            UserService.logout();
        };

        this.tryLogin = function () {
            $log.info(this.user);
            $log.info(this.user.username);
            $log.info(this.user.password);
            UserService.login(this.user);
        };
        $log.info("Login ctrl");
    }
})();