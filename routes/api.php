<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/forums', function (Request $request) {
    $result = App\Forum::with("subForums")->get()->where("parent_id", null);

    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});

Route::get('/forum/{slug}', function (Request $request, $slug ) {
    $forum = App\Forum::where("slug", $slug)->with("parent")->first();
    $threads = $forum->threads()->with("main_post")->paginate(5);
    $result = array(
        "forum" => $forum,
        "threads" => $threads,
    );
    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});

Route::get('/thread/{slug}', function (Request $request, $slug ) {

    $thread = App\Thread::where("slug", $slug)->with(array("forum" => function($query){
        $query->with("parent");
    }))->first();
    $posts = $thread->posts()->with("user")->paginate(10);

    $result = array("thread" => $thread, "main_post" => $thread->posts()->with("user")->first(), "posts" => $posts, "pages" => $posts->total() / $posts->perPage());
    //$result = App\Post::paginate(5);
    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});


Route::put('/post/add/{slug}', function (Request $request, $slug ) {
    $thread = App\Thread::where("slug", $slug)->first();
    $post = new App\Post();
    $post->title = $request->title;
    $post->slug = "";
    $post->content = $request->content;
    $post->posted_by = $request->posted_by;
    $post->parent_id = $thread->id;
    $post->setCreatedAt(new DateTime());
    $post->save();
    $post->slug = App\Utils::generateURLHelper($post->title . " " . $post->id);
    $post->setUpdatedAt(new DateTime());
    $post->save();
    return App\Post::with("user")->where("id", $post->id)->get();
});


//->middleware('auth:api');
