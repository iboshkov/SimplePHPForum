@extends("layout")

@section("content")
    <div ng-cloak class="ui main container">
        <div ng-controller="ForumController as cont" class="">
            <h2 class="ui header">
                @{{ cont.forum.title  }}
                <div class="sub header">@{{ cont.forum.description }}</div>
            </h2>

            <div class="ui mini pagination pointing menu">
                <div class="header item">Page 1 of 11</div>
                <a class="active item">
                    1
                </a>
                <div class="disabled item">
                    ...
                </div>
                <a class="item">
                    10
                </a>
                <a class="item">
                    11
                </a>
                <a class="item">
                    Next
                </a>
            </div>


            <div class="ui segments">
                <div class="ui inverted segment category-title">
                    Threads
                </div>
                <div ng-repeat="thread in cont.forum.threads" class="ui segment">
                    <div class="ui divided items">
                        <div class="item">
                            <div class="ui container equal width grid ">
                                <div class="column forum-description">
                                    <div class="content">
                                        <div class="left floated" style="margin-right: 10px">
                                            <i class="huge comments outline icon"></i>
                                        </div>
                                        <div class="header"><a href="/thread/@{{ thread.url_helper }}">@{{ thread.title }}</a></div>
                                        <div class="meta">
                                            <a href="#">@{{ thread.posted_by.username }}</a> <span
                                                    am-time-ago="thread.posted_on"></span></span></p>
                                            <div class="ui mobile only stats grid">
                                                <span>Views: @{{ thread.num_views  }}</span>
                                                <span>Posts: @{{ thread.num_replies  }}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="right floated left aligned three wide column tablet only computer and up">
                                    <div class="ui basic segment">
                                        <span>Views: @{{ thread.num_views  }}</span><br/>
                                        <span>Posts: @{{ thread.num_replies  }}</span>
                                    </div>
                                </div>
                                <div class="right floated left aligned two wide column tablet only computer and up">
                                    <div class="ui basic segment">
                                        <a href="#" class="right aligned">@{{ thread.last_post.posted_by.username }}</a><br/>
                                        <span am-time-ago="thread.last_post.posted_on"></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ui red segment">
                    Showing threads @{{ cont.forum.pagination_start+1 }} to @{{ cont.forum.pagination_start + cont.forum.threads.length }} from a total of @{{ cont.forum.num_threads }}
                </div>
            </div>

        </div>
@endsection