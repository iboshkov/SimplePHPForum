<div class="ui main container">
    <div ng-cloak class="">
        <h2 class="ui header">
            @{{ data.thread.title  }}
            <div class="sub header">Discussion by <b>@{{ data.main_post.user.username }}</b></div>
        </h2>

        <div class="ui hidden horizontal divider"></div>

        <pagination page-data="data.posts" callback="loadPage(page)"></pagination>

        <div class="ui hidden horizontal divider"></div>

        <div class="ui">
            <div ng-repeat="post in data.posts.data" class="ui">
                <post ng-attr-id="@{{ $last ? 'lastPost' : undefined}}" scroll-if="@{{ scrollToLast && $last }}" data="post"></post>
            </div>
            <div class="ui hidden horizontal divider"></div>

            <pagination page-data="data.posts" callback="loadPage(page)"></pagination>

            <div class="ui hidden horizontal divider"></div>
            <post-form data="data.thread" ng-if="loggedIn()"></post-form>
        </div>
    </div>
</div>