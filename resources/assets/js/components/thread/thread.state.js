(function () {
    angular
        .module('forums')
        .config(registerState);

    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {
        $stateProvider.state('thread', {
            url: '/forum/{parentSlug}/{parentPage}/{slug}/{page}/',
            params: {
                page: {value: "1"},
                parentSlug: {value: "---"},
                parentPage: {value: "1"},
            },
            templateUrl: "/angular/thread",
            controller: "ThreadController",
            ncyBreadcrumb: {
                label: "{{ data.thread.title }}",
                parent:  'forum({slug: parentSlug})',
            }
        });
    }
})();