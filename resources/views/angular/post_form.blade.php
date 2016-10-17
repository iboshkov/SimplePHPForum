<form ng-controller="PostFormController"  ng-submit="addPost(data)" class="ui reply form">

    <div class="ui field " id="postPreview" >
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
    @{{ state.showPreview }}
    <input type="checkbox" ng-model="state.showPreview"/>1
    <h4>Posting in: @{{ data.title }}</h4>
    @{{ post.content }}
    <div1 id="postText" class="field">
        @{{content}}
        <div ckeditor="options" ng-model="post.content" ready="onReady($instance)"></div>
    </div1>
    <div class="ui hidden horizontal divider"></div>
    <button type="submit" class="ui red right floated labeled submit icon button">
        <i class="icon edit"></i> Add Reply
    </button>


</form>