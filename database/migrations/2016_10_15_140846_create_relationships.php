<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->foreign("parent_id")->references("id")->on("forums");
            //$table->foreign("main_post_id")->references("id")->on("posts");
        });

        Schema::table('posts', function (Blueprint $table) {
            $table->foreign("parent_id")->references("id")->on("threads");
            $table->foreign("posted_by")->references("id")->on("users");
        });

        Schema::table('forums', function (Blueprint $table) {
            $table->foreign("parent_id")->references("id")->on("forums");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('threads', function (Blueprint $table) {
            $table->dropForeign("threads_parent_id_foreign");
           // $table->dropForeign("threads_main_post_id_foreign");
        });

        Schema::table('posts', function (Blueprint $table) {
            $table->dropForeign("posts_parent_id_foreign");
            $table->dropForeign("posts_posted_by_foreign");
        });

        Schema::table('forums', function (Blueprint $table) {
            $table->dropForeign("forums_parent_id_foreign");
        });
    }
}
