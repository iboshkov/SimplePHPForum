<div ng-controller="PaginationController" class="ui mini pagination pointing menu" ng-init="pages = 231">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ Math.ceil(pageData.total / pageData.per_page) }}</div>

    <div ng-repeat="n in [] | range: Math.ceil(pageData.total / pageData.per_page)">
        <a ng-class="{active: pageData.current_page == $index+1}" class="item"  data-ng-click="callback({page: $index+1})">
            @{{$index+1}}
        </a>
    </div>

</div>