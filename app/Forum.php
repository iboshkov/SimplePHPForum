<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
    protected $table = 'forums';

    public function threads()
    {
        return $this->hasMany('App\Thread', "parent_id");
    }

    public function parent()
    {
        return $this->belongsTo('App\Forum', "parent_id");
    }

    public function subForums()
    {
        return $this->hasMany('App\Forum', "parent_id");
    }
}
