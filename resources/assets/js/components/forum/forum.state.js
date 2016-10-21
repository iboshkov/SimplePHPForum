(function () {
    angular
        .module('forums')
        .config(registerState);

    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {
        $stateProvider.state('forum', {
            url: '/forum/{forumId}',
            template: '<h1>test</h1><forum></forum><h1>endtest</h1>',
        });
    }
})();