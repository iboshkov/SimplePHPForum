@extends("layout")

@section("content")
    <div class="ui main container">
        <div ng-controller="ThreadController as cont" class="">
            <h2 class="ui header">
                @{{ cont.thread.title  }}
                <div class="sub header">Discussion by @{{ cont.thread.posted_by.username }}</div>
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

            <div class="ui hidden horizontal divider"></div>

            <div class="ui ">
                <div ng-repeat="post in cont.thread.posts" class="ui fluid red card">
                    <div class="content">
                        <div class="ui divided items">
                            <div class="item">
                                <div class="ui container equal width grid ">
                                    <div class="three wide column forum-description">
                                        <div class="content">
                                            <div class="left floated ui red card"">
                                            <div class="image">
                                                <img class="ui small image" ng-src="@{{ post.posted_by.profile_img }}"/>
                                            </div>
                                            <div class="content">
                                                <a href="#">@{{ post.posted_by.username }}</a><br/>
                                                <span class=""><b>Member</b></span><br/>
                                                <span am-time-ago="post.posted_on"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="column">
                                    <h3 class="header"><a href="">@{{ post.title }}</a></h3>

                                    <p>Bacon ipsum dolor amet flank jerky burgdoggen pork belly short loin capicola. Ham pork loin kielbasa, landjaeger meatloaf jowl sausage. Chuck boudin jowl pancetta venison ham ball tip leberkas. Fatback short ribs shankle biltong.</p>
                                    <p>Shank ham hock bresaola, flank t-bone boudin prosciutto. Ball tip fatback flank spare ribs tail. Cow chicken ham pork chop jerky. Salami t-bone ball tip shoulder, pastrami chuck ham hock sirloin ribeye cupim bacon fatback short ribs ham pork chop. Pancetta ham rump cow sirloin tri-tip strip steak. Salami pork loin chicken beef ribs shoulder fatback, spare ribs rump short ribs porchetta. Picanha pork leberkas burgdoggen turkey pig, sirloin shoulder short loin fatback meatloaf pastrami venison t-bone.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui stackable secondary menu">
                            <div class="item">
                                <button class="ui red icon button"><i class="warning sign icon"></i> </button>
                            </div>
                            <div class="right menu">
                                <div class="item">
                                    <div class="item">
                                        <div class="ui labeled button" tabindex="0">
                                            <div class="ui button">
                                                <i class="reply icon"></i> Reply
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui labeled button" tabindex="0">
                                        <div class="ui green button">
                                            <i class="thumbs up icon"></i> Say Thanks
                                        </div>
                                        <a class="ui basic left pointing green label">
                                            1,048
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection