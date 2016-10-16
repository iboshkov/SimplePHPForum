<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    public function user()
    {
        return $this->belongsTo('App\User', "posted_by");
    }

    public function parent()
    {
        return $this->belongsTo('App\Thread');
    }
}
