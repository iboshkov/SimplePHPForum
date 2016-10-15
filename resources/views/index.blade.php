@extends("layout")

@section("content")
    <div ng-cloak class="ui main container">

        <div ng-cloak ng-controller="IndexController as cont" class="">
            <div ng-repeat="category in cont.forums" class="ui segments">
                <div class="ui inverted segment category-title">
                    <p><a href="/forum/@{{category.url_helper}}">@{{ category.title }}</a></p>
                    <p ng-if="category.description">@{{ category.description }}</p>
                </div>

                <div ng-repeat="forum in category.subForums" class="ui segment">
                    <div class="ui divided items">
                        <div class="item">
                            <div class="ui container grid ">

                                <div class="ten wide column forum-description">
                                    <div class="content">
                                        <div class="left floated" style="margin-right: 10px">
                                            <i class="huge comments outline icon"></i>
                                        </div>
                                        <div class="header"><a href="/forum/@{{forum.url_helper}}">@{{ forum.title }}</a></div>
                                        <div class="description">
                                            @{{ forum.description | limitTo:10 }}
                                            @{{ forum.description.length >= 10 ? '...' : '' }}
                                        </div>
                                        <div class="meta">
                                            <span class="discussions"><i class="chat icon"></i>  191</span>
                                            <span class="messages"><i class="mail icon"></i> 347</span>
                                        </div>
                                    </div>
                                </div>
                                <div ng-if="forum.last_post"
                                     class="right floated left aligned six wide column tablet only computer and up">
                                    <div class="ui segment">
                                        Last post: <a href="#">@{{ forum.last_post.title  }}</a>
                                        <p><a href="#">@{{ forum.last_post.posted_by.username }}</a>, <span
                                                    am-time-ago="forum.last_post.posted_on"></span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="ui basic segment">
            <div class="ui mini statistics">
                <div class="statistic">
                    <div class="value">
                        <i class="users icon"></i> 242
                    </div>
                    <div class="label">
                        Members
                    </div>
                </div>
                <div class="statistic">
                    <div class="value">
                        <i class="comments icon"></i> 242
                    </div>
                    <div class="label">
                        Topics
                    </div>
                </div>
                <div class="statistic">
                    <div class="value">
                        <i class="mail icon"></i> 242
                    </div>
                    <div class="label">
                        Posts
                    </div>
                </div>
            </div>
        </div>
@endsection