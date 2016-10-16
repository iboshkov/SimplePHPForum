<?php

namespace App;

class Utils
{
    public static function generateURLHelper($input, $separator='-') {
        return str_slug($input, $separator);
    }
}