<form ng-controller="PostController" ng-submit="addPost(data)" class="ui reply form">
    <div class="ui field" ng-if="showPreview" >
        <div class="ui hidden horizontal divider"></div>
        <h2 class="ui header">
            <i class="flipped outline comment icon"></i>
            <div class="content">
                Preview
                <div class="sub header">This is what your post is going to look like once posted:</div>
            </div>
        </h2>

        <post data="post" hide-controls="true"></post>
    </div>

    <h4>Posting in: @{{ data.title }}</h4>
    <div class="field">
        <textarea ng-focus="showPreview = true" ng-blur="showPreview = false" ng-model="post.content"></textarea>
    </div>

    <button type="submit" class="ui red right floated labeled submit icon button">
        <i class="icon edit"></i> Add Reply
    </button>



</form>