<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/forum/{slug}', function ($slug=null) {
    if ($slug == null)
        return redirect("/");

    return view('forum', ['slug' => $slug]);
});

Route::get('/thread/{slug}/{page?}', function ($slug=null, $page=1) {
    if ($slug == null)
        return redirect("/");

    return view('thread', ['slug' => $slug, 'page' => $page]);
});
