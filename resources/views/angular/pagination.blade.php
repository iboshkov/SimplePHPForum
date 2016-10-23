<div class="ui mini pagination pointing menu">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>

    <div ng-repeat="n in [] | range: 0 : maxPages">
        <pagination-entry ng-attr-active="@{{ pageData.current_page == n+1 }}" class=""
                          ng-click="callback({page: n+1})">
            @{{pageData.current_page == n+1}}
            @{{n+1}}
        </pagination-entry>
    </div>

</div>
