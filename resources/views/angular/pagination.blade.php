<div class="ui container grid">
    <div class="row tablet only computer and up">
        <div ng-if="maxPages >= 5" class="ui mini pagination pointing menu">
            <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>
            <!-- First page ... -->
            <div class="ui mini secondary menu" ng-if="pageData.current_page >= 5">
                <pagination-entry active="@{{ pageData.current_page == n+1 }}" class="" data-ng-click="callback({page: 1})">
                    @{{1}}
                </pagination-entry>

                <pagination-entry ng-attr-add-class="disabled">
                    &hellip;
                </pagination-entry>
            </div>
            <!-- Between 5 and max-5 -->
            <div class="ui mini secondary menu" ng-if="pageData.current_page >= 5 && pageData.current_page <= (maxPages-5)">

                <div class="ui mini secondary menu" ng-repeat="n in [] | range: roundStart : roundEnd">
                    <pagination-entry active="@{{ pageData.current_page == n+1 }}" class="" data-ng-click="callback({page: n+1})">
                        @{{n+1}}
                    </pagination-entry>
                </div>

            </div>
            <div ng-if="pageData.current_page < 5" class="ui mini secondary menu" ng-repeat="n in [] | range: 0 : 6">
                <pagination-entry active="@{{ pageData.current_page == n+1 }}" class="" data-ng-click="callback({page: n+1})">
                    @{{n+1}}
                </pagination-entry>
            </div>
            <div ng-if="pageData.current_page > (maxPages-5)" class="ui mini secondary menu" ng-repeat="n in [] | range: (maxPages-6) : maxPages">
                <pagination-entry active="@{{ pageData.current_page == n+1 }}" class="" data-ng-click="callback({page: n+1})">
                    @{{n+1}}
                </pagination-entry>
            </div>

            <!-- ... Last page -->
            <div class="ui mini secondary menu" ng-if="pageData.current_page <= (maxPages-5)">
                <pagination-entry ng-attr-add-class="disabled">
                    &hellip;
                </pagination-entry>

                <pagination-entry active="@{{ pageData.current_page == maxPages }}" class="" data-ng-click="callback({page: maxPages})">
                    @{{maxPages}}
                </pagination-entry>
            </div>
        </div>
        <div ng-if="maxPages < 5" class="ui mini pagination pointing menu">
            <div class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>
            <div ng-repeat="n in [] | range: 0 : maxPages">
                <pagination-entry active="@{{ pageData.current_page == n+1 }}" class="" data-ng-click="callback({page: n+1})">
                    @{{n+1}}
                </pagination-entry>
            </div>
        </div>
    </div>
    <div class="row mobile only">
        <div class="ui mini pagination pointing menu">
            <pagination-entry ng-if="pageData.current_page > 1" data-ng-click="callback({page: pageData.current_page - 1})">
                Previous
            </pagination-entry>

            <div ng-click="openPageSelect()" class="header item">Page @{{ pageData.current_page }} of @{{ maxPages }}</div>

            <pagination-entry ng-if="pageData.current_page < maxPages" data-ng-click="callback({page: pageData.current_page + 1})">
                Next
            </pagination-entry>
        </div>
    </div>
</div>

<div class="ui special popup transition hidden">
    <div class="ui icon input">

        <input ng-model="newPageNum" min="1" max="@{{maxPages}}" type="number" placeholder="Go to page...">
        <i ng-if="newPageNum >= 1 && newPageNum <= maxPages" ng-click="callback({page: newPageNum})" class="inverted circular right double angle link icon"></i>
    </div>
</div>
