/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    window.app = angular.module("forums", ['angularMoment']);
    app.controller("IndexController", function () {
        this.forums = indexData;
    });


    var indexData =
        [{
            id: 0,
            url_helper: "community-support",
            title: "Community Support",
            description: "Support from the community",
            num_posts: 1234,
            num_threads: 315,
            subForums: [
                {
                    id: 1,
                    url_helper: "installation-upgrade-import",
                    title: "Installation, Upgrade, and Import Support",
                    description: "",
                    num_posts: 1234,
                    num_threads: 315,
                    last_post: {
                        id: 0,
                        title: "Help needed",
                        posted_on: new Date(2016, 9, 13),
                        posted_by: {
                            id: 3,
                            username: "iboshkov"
                        }
                    },
                    subForums: []
                },
                {
                    id: 2,
                    title: "Troubleshooting and Problems",
                    url_helper: "troubleshooting-and-problems",
                    description: "Lorem ipsum and so on...",
                    num_posts: 1234,
                    num_threads: 315,
                    subForums: []
                }
            ]
        }, {
                id: 3,
                title: "Category - No description",
                description: "",
                num_posts: 1234,
                num_threads: 315,
                subForums: [
                    {
                        id: 4,
                        title: "Forum",
                        description: "Lorem ipsum and so on...",
                        num_posts: 1234,
                        num_threads: 315,
                        subForums: []
                    },
                    {
                        id: 5,
                        title: "Forum",
                        description: "Lorem ipsum and so on...",
                        num_posts: 1234,
                        num_threads: 315,
                        subForums: []
                    },
                    {
                        id: 6,
                        title: "Forum",
                        description: "Lorem ipsum and so on...",
                        last_post: {
                            id: 0,
                            title: "Help needed",
                            posted_on: new Date(2016, 9, 13),
                            posted_by: {
                                id: 3,
                                username: "iboshkov"
                            }
                        },
                        num_posts: 1234,
                        num_threads: 315,
                        subForums: []
                    }
                ]
            }];


    var forumData = {
            id: 1,
            url_helper: "installation-upgrade-import",
            title: "Installation, Upgrade, and Import Support",
            description: "",
            num_posts: 1234,
            num_threads: 315,
            last_post: {
                id: 0,
                title: "Help needed",
                posted_on: new Date(2016, 9, 13),
                posted_by: {
                    id: 3,
                    username: "iboshkov"
                }
            },
            threads: [
                {
                    id: 1,
                    url_helper: "using-same-install-files-on-multiple-installations.121813",
                    title: "Using same install files on multiple installations",
                    posted_on: new Date(2016, 9, 13, 13),
                    num_views: 104,
                    num_replies: 14,
                    posted_by: {
                        id: 3,
                        username: "iboshkov"
                    },
                    last_post: {
                        id: 0,
                        title: "Help needed",
                        posted_on: new Date(2016, 9, 13),
                        posted_by: {
                            id: 3,
                            username: "iboshkov"
                        }
                    },
                }
            ],
            subForums: []
    };

    app.controller("ForumController", function () {
        this.forum = forumData;
    });
    console.log("Hello");
})();
