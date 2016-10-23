(function () {
    angular
        .module('forums')
        .config(registerState);

    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {
        $stateProvider.state('thread', {
            url: '/forum/{slug}/{page}/?scrollToLast',
            params: {
                page: {value: "1"},
                parentSlug: {value: "---"},
                parentPage: {value: "1"},
                scrollToLast: {value: "false"},
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
