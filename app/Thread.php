<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $table = 'threads';

    public function forum()
    {
        return $this->belongsTo('App\Forum', "forum_id");
    }

    public function main_post()
    {
        return $this->hasOne('App\Post', "parent_id");
    }

    public function posts()
    {
        return $this->hasMany('App\Post', "parent_id");
    }
}
