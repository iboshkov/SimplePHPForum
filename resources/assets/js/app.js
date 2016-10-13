/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    var app = angular.module("forums", []);

    app.controller("ForumsController", function () {
        this.forums = cat;
    });

    var cat =
        [{
            title: "Category",
            description: "Lorem ipsum and so on...",
            posts: 1234,
            threads: 315,
            subForums: [
                {
                    title: "Forum",
                    description: "Lorem ipsum and so on...",
                    posts: 1234,
                    threads: 315,
                    subForums: []
                },
                {
                    title: "Forum",
                    description: "Lorem ipsum and so on...",
                    posts: 1234,
                    threads: 315,
                    subForums: []
                }
            ]
        },
            {
                title: "Category",
                description: "Lorem ipsum and so on...",
                posts: 1234,
                threads: 315,
                subForums: [
                    {
                        title: "Forum",
                        description: "Lorem ipsum and so on...",
                        posts: 1234,
                        threads: 315,
                        subForums: []
                    },
                    {
                        title: "Forum",
                        description: "Lorem ipsum and so on...",
                        posts: 1234,
                        threads: 315,
                        subForums: []
                    }
                ]
            }];


    console.log("Hello");
})();
