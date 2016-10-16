
<div class="ui red segment">
    <div class="ui breadcrumb">
        <span ng-repeat="item in path">
            <a href="@{{ item.url }}" class="section">@{{item.name}}</a>
            <div ng-show="!$last" class="divider"> /</div>
        </span>
    </div>
</div>