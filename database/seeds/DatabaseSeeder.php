<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    const POST_CONTENT = "<p>Bacon ipsum dolor amet flank jerky burgdoggen pork belly short loin capicola. Ham pork loin kielbasa, landjaeger meatloaf jowl sausage. Chuck boudin jowl pancetta venison ham ball tip leberkas. Fatback short ribs shankle biltong.</p>
                            <p>Shank ham hock bresaola, flank t-bone boudin prosciutto. Ball tip fatback flank spare ribs tail. Cow chicken ham pork chop jerky. Salami t-bone ball tip shoulder, pastrami chuck ham hock sirloin ribeye cupim bacon fatback short ribs ham pork chop. Pancetta ham rump cow sirloin tri-tip strip steak. Salami pork loin chicken beef ribs shoulder fatback, spare ribs rump short ribs porchetta. Picanha pork leberkas burgdoggen turkey pig, sirloin shoulder short loin fatback meatloaf pastrami venison t-bone.</p>";

    public function createForum($name, $description="", $parent=null) {
        return DB::table('forums')->insertGetId([
            'title' => $name,
            'description' => $description,
            'slug' => App\Utils::generateURLHelper($name),
            'parent_id' => $parent,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
    public function createThread($name, $description="", $forum=null) {
        $thread_id = DB::table('threads')->insertGetId([
            'title' => $name,
            'slug' => App\Utils::generateURLHelper($name),
            'parent_id' => $forum,
           // 'main_post_id' => null,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        for ($i = 0; $i < 2; $i++){
            $post_id  = $this->createPost("Test post " . $i, self::POST_CONTENT, $thread_id);
        }
    }

    public function createPost($name, $description="", $thread=null) {
        return  DB::table('posts')->insertGetId([
            'title' => $name,
            'content' => $description,
            'slug' => App\Utils::generateURLHelper($name),
            'parent_id' => $thread,
            'posted_by' => random_int(1, 3),
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'testuser1',
            'profile_img' => 'https://avatars1.githubusercontent.com/u/2392895?v=3&s=466',
            'name' => 'Test Account',
            'email' => 'test@example.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'username' => 'testuser2',
            'profile_img' => 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/11752549_449458791892513_1188570634453230582_n.jpg?oh=dd09ab43fed508c7d94de1842f5d04dc&oe=58A1BAC9',
            'name' => 'Test Account',
            'email' => 'test1@example.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'username' => 'testuse3',
            'profile_img' => 'https://scontent-vie1-1.xx.fbcdn.net/t31.0-8/14206193_602213643273232_3911805378455266362_o.jpg',
            'name' => 'Test Account',
            'email' => 'test2@example.com',
            'password' => bcrypt('secret'),
        ]);

        $this->createForum("Community Support", "Support from the community");
        $id = $this->createForum("Installation, Upgrade, and Import Support", "", 1);
        for ($i = 0; $i < 20; $i++){
            $this->createThread("Test thread $i", "Llelll", 2);
        }
        $this->createForum("Troubleshooting and Problems", "Lorem ipsu ...", 1);
        $this->createForum("Category - No Description", "");
        $this->createForum("Forum 1", "Lorem ipsu ...", 4);
        $this->createForum("Forum 2", "Lorem ipsu ...", 4);
        $this->createForum("Forum 3", "Lorem ipsu ...", 4);
        $this->createForum("Forum 4", "Lorem ipsu ...", 4);
        // $this->call(UsersTableSeeder::class);
    }
}
