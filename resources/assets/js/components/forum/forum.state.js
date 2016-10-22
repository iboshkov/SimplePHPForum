(function () {
    angular
        .module('forums')
        .config(registerState);

    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {
        $stateProvider.state('forum', {
            url: '/forum/{slug}/{page}',
            params: {
                page: {value: "1"}
            },
            template: '<forum></forum>',
        });
    }
})();