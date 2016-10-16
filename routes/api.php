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
});

Route::get('/forums', function (Request $request) {
    $result = App\Forum::with("subForums")->get()->where("parent_id", null);

    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});

Route::get('/forum/{slug}', function (Request $request, $slug ) {
    $forum = App\Forum::where("slug", $slug)->first();
    $threads = $forum->threads()->with("main_post")->paginate(5);
    $result = array(
        "forum" => $forum,
        "threads" => $threads,
    );
    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});

Route::get('/thread/{slug}', function (Request $request, $slug ) {

    $thread = App\Thread::where("slug", $slug)->first();
    $posts = $thread->posts()->with("user")->paginate(10);

    $result = array("thread" => $thread, "main_post" => $thread->posts()->with("user")->first(), "posts" => $posts, "pages" => $posts->total() / $posts->perPage());
    //$result = App\Post::paginate(5);
    return Response::json($result, $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
});

//->middleware('auth:api');
