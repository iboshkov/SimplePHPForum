<div ng-if="maxPages >= 5" class="ui mini pagination pointing menu">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>
    <!-- Between 5 and max-5 -->
    <div class="ui mini secondary menu" ng-if="pageData.current_page >= 5 && pageData.current_page <= (maxPages-5)">
        <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                          data-ng-click="callback({page: 1})">
            @{{1}}
        </pagination-entry>

        <pagination-entry ng-attr-add-class="disabled">
            &hellip;
        </pagination-entry>

        <div class="ui mini secondary menu" ng-repeat="n in [] | range: roundStart : roundEnd">
          <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                            data-ng-click="callback({page: n+1})">
              @{{n+1}}
          </pagination-entry>
        </div>

        <pagination-entry ng-attr-add-class="disabled">
            &hellip;
        </pagination-entry>

        <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                          data-ng-click="callback({page: maxPages})">
            @{{maxPages}}
        </pagination-entry>
    </div>
    <div ng-if="pageData.current_page < 5" class="ui mini secondary menu" ng-repeat="n in [] | range: roundStart : 6">
      <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                        data-ng-click="callback({page: n+1})">
          @{{n+1}}
      </pagination-entry>
    </div>
    <div ng-if="pageData.current_page > (maxPages-5)" class="ui mini secondary menu" ng-repeat="n in [] | range: (maxPages-6) : maxPages">
      <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                        data-ng-click="callback({page: n+1})">
          @{{n+1}}
      </pagination-entry>
    </div>
</div>
<div ng-if="maxPages < 5" class="ui mini pagination pointing menu">
    <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>

    <div ng-repeat="n in [] | range: 0 : maxPages">
        <pagination-entry active="@{{ pageData.current_page == n+1 }}" class=""
                          data-ng-click="callback({page: n+1})">
            @{{n+1}}
        </pagination-entry>
    </div>

</div>
