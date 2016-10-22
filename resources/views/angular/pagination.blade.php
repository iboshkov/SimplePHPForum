<div ng-if="maxPages >= 5" class="ui mini pagination pointing menu">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>
    <a class="item"  data-ng-click="callback({page: n+1})">
        @{{1}}
    </a>
    <a class="disabled item"  data-ng-click="callback({page: n+1})">
        ...
    </a>

    <div class="ui mini secondary menu" ng-if="pageData.current_page >= 5 && pageData.current_page <= (maxPages-5)">
        <div class="ui mini secondary menu" ng-repeat="n in [] | range: roundStart : roundEnd">
            <a ng-class="{active: pageData.current_page == n+1}" class="item"  data-ng-click="callback({page: n+1})">
                @{{n+1}}
            </a>
        </div>

        <a class="disabled item"  data-ng-click="callback({page: n+1})">
            ...
        </a>
        <a class="item"  data-ng-click="callback({page: maxPages})">
            @{{ maxPages }}
        </a>
    </div>
    <div ng-if="pageData.current_page < 5" class="ui mini secondary menu" ng-repeat="n in [] | range: roundStart : 6">
        <a ng-class="{active: pageData.current_page == n+1}" class="item"  data-ng-click="callback({page: n+1})">
            @{{n+1}}
        </a>
    </div>
    <div ng-if="pageData.current_page > (maxPages-5)" class="ui mini secondary menu" ng-repeat="n in [] | range: (maxPages-6) : maxPages">

        <a ng-class="{active: pageData.current_page == n+1}" class="item"  data-ng-click="callback({page: n+1})">
            @{{n+1}}
        </a>
    </div>
</div>
<div ng-if="maxPages < 5" class="ui mini pagination pointing menu">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>
    <div ng-repeat="n in [] | range: 0 : maxPages">
        <a ng-class="{active: pageData.current_page == n+1}" class="item"  data-ng-click="callback({page: n+1})">
            @{{n+1}}
        </a>
    </div>

</div>