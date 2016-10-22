
<div class="ui red segment">
    <div class="ui breadcrumb">
        <span ng-repeat="crumb in crumbs">
            <a ui-sref="@{{ crumb.type }} ({slug: crumb.slug})" class="section">@{{ crumb.name }}</a>
            <div ng-show="!$last" class="divider"> /</div>
        </span>
    </div>
</div>