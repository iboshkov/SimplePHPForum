(function () {
    angular
        .module('forums')
        .controller('PostFormController', PostFormController);

    PostFormController.$inject = ["$scope", "$http", "$log", "$rootScope", "UserService"];

    function PostFormController($scope, $http, $log, $rootScope, UserService) {
        $log.info("Logged in user");
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
            skin: "minimalist",
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
        UserService.getUser();

        $scope.$on("user:updated", function (data) {
            $log.info("Updating post controller");
            $scope.post.user = UserService.currentUser();
        });

        $scope.addPost = function addPost(thread) {
            $log.info("Adding post" );
            $log.info(thread);
            // $http.get("/api/forum/" + slug + "?page=" + page_num)
            $scope.post.title = thread.title;
            $scope.post.parent_id = thread.id;
            $log.info("Putting");
            $log.info($scope.post);
            $http.put("/api/post/add/", $scope.post).then(function(response){
                $log.info("Tried to put");
                $log.info(response);
                resetPost();
                $rootScope.$broadcast("posts:updated");
            });
        }
    }
})();