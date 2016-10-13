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

Route::get('/forum/{url_helper}', function ($url_helper=null) {
    if ($url_helper == null)
        return redirect("/");

    return view('forum');
});

Route::get('/thread/{url_helper}', function ($url_helper=null) {
    if ($url_helper == null)
        return redirect("/");

    return view('thread');
});
