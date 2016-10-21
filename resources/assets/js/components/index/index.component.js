(function () {
    angular
        .module('forums')
        .component("index", {
            templateUrl: "/angular/index",
            controller: "IndexController"
        });
    console.log("Added index component");

})();