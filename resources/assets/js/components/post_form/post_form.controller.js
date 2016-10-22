(function () {
    angular
        .module('forums')
        .controller('PostFormController', PostFormController);

    PostFormController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService", "PostService", "$state"];

    function PostFormController($scope, $http, $log, $rootScope, UserService, PostService, $state) {
        $scope.post = {
            content: "",
            user: {
            }
        };

        $scope.state = {
            showPreview: false,
        };

        // Editor options.
        $scope.options = {
            language: 'en',
            allowedContent: true,
            entities: false
        };

        $('#postPreview').transition('hide');

        $scope.onReady = function ($instance) {
            console.log("Editor ready");
            $log.info($instance);
            var editor = $instance;
            editor.on('focus', function(e) {
                $('#postPreview').transition('scale in');
                console.log('The editor named ' + e.editor.name + ' is now focused');
                $rootScope.scrollToPostArea();
            });
            editor.on('blur', function(e) {
                $('#postPreview').transition('scale out');
                console.log('The editor named ' + e.editor.name + ' is now not focused');
            });
        };

        function resetPost() {
            $scope.post.content = "";
        }

        resetPost();

        $scope.post.user = $rootScope.loggedInUser;

        $scope.addPost = function addPost(thread) {
            $scope.post.title = thread.title;
            $scope.post.parent_id = thread.id;
            PostService.save($scope.post).then(function(){
                $state.go("thread", {page: -1, slug: thread.slug, scrollToLast: true}, {reload: true});
                console.log("Posting success");
            }).catch(function () {
                console.log("Error posting");
            });
        }
    }
})();