(function () {
    angular
        .module('forums')
        .config(registerState);

    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {
        console.log("Registering state index");
        $stateProvider.state('index',
            {
                name: 'test',
                url: '/',
                template: '<index></index>'
            });
    }
})();