<div class="ui segment">
    <div class="ui grid mobile only">
        <div class="equal width row ">
            <div class="column">
                <div class="ui basic segment">
                    <img class="ui tiny left floated image" ng-src="@{{ data.user.profile_img }}"/>

                    <div class="content">
                        <a href="#">@{{ data.user.username }}</a><br/>
                        <span class=""><b>Member</b></span><br/>
                        <span am-time-ago="data.created_at"></span><br/>
                        <span></span><br/>
                        <span></span><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="ui divided items">
            <div class="item">
                <div class="ui container equal width grid ">
                    <div class="row">
                        <div class="three wide column forum-description column tablet only computer and up">
                            <div class="content">
                                <div class="ui">

                                    <div class="ui fluid red card ">
                                        <div class="image">
                                            <img class="ui small profile image"
                                                 ng-src="@{{ data.user.profile_img }}"/>
                                        </div>
                                        <div class="content">
                                            <a href="#">@{{ data.user.username }}</a><br/>
                                            <span class=""><b>Member</b></span><br/>
                                            <span am-time-ago="data.created_at"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <h3 class="header"><a href="">@{{ data.title }}</a></h3>
                            @{{ data.content }}
                        </div>
                        </row>
                    </div>

                </div>
            </div>
            <div ng-show="!hideControls" class="extra content">
                <div class="ui horizontal list">
                    <div class="item">
                        <button class="ui basic red icon button"><i class="warning sign icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ui right floated horizontal list">
                    <div class="item">
                        <div class="ui labeled button" tabindex="0">
                            <div class="ui button">
                                <i class="reply icon"></i> Reply
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="ui labeled button" tabindex="0">
                            <div class="ui green button">
                                <i class="thumbs up icon"></i> Say Thanks
                            </div>
                            <a class="ui basic left pointing green label grid column tablet only computer and up">
                                1,048
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="ui horizontal divider"></div>
