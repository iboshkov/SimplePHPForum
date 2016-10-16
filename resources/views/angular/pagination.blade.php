<div class="ui mini pagination pointing menu" ng-init="pages = 231">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ pageData.total / pageData.per_page }}</div>

    <div ng-repeat="n in [] | range: pageData.total / pageData.per_page">
        <a ng-class="{active: pageData.current_page == $index+1}" class="item" href="#" data-ng-click="callback({slug: null, page: $index+1})">
            @{{$index+1}}
        </a>
    </div>

</div>