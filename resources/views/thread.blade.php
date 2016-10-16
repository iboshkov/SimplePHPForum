@extends("layout")

@section("content")
    <div class="ui main container">
        <div ng-cloak ng-controller="ThreadController" ng-init="init('{{$slug}}', {{$page}})" class="">
            <h2 class="ui header">
                @{{ data.thread.title  }}
                <div class="sub header">Discussion by <b>@{{ data.main_post.user.username }}</b></div>
            </h2>

            <div class="ui hidden horizontal divider"></div>

            <pagination page-data="data.posts" callback="loadPage(slug, page)"></pagination>

            <div class="ui hidden horizontal divider"></div>

            <div class="ui ">
                <div ng-repeat="post in data.posts.data" class="ui">
                    <post data="post"></post>

                </div>
                <div class="ui hidden horizontal divider"></div>

                <pagination page-data="data.posts" callback="loadPage(slug, page)"></pagination>

                <div class="ui hidden horizontal divider"></div>
                <post-form data="data.thread" ng-if="loggedIn()"></post-form>

            </div>
@endsection