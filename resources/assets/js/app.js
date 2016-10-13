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
        pagination_start: 0,
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
            }, {
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

    app.controller("ThreadController", function () {
        this.thread = threadData;
    });

    var threadData = {
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
        posts: [
            {
                id: 0,
                title: "Help needed",
                posted_on: new Date(2016, 9, 13),
                posted_by: {
                    id: 3,
                    username: "iboshkov",
                    profile_img: "https://avatars1.githubusercontent.com/u/2392895?v=3&s=466"
                }
            },
            {
                id: 0,
                title: "Reply #1",
                posted_on: new Date(2016, 9, 13),
                posted_by: {
                    id: 3,
                    username: "macarstrider",
                    profile_img: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11752549_449458791892513_1188570634453230582_n.jpg?oh=dd09ab43fed508c7d94de1842f5d04dc&oe=58A1BAC9"
                }
            }
        ],
        last_post: {
            id: 0,
            title: "Help needed",
            posted_on: new Date(2016, 9, 13),
            posted_by: {
                id: 3,
                username: "macarstrider"
            }
        }
    };
    console.log("Hello");
})();
