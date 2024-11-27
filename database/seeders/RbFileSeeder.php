<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RbFileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rb_files')->insert([
            'user_id' => 1,
            'import' => true,
            'supplier'=> 'Zupco',
            'importer'=> 'Menokws',
            'document' => 'doc-url',
            'ref' => 'rb1',
            'entry_number' => '123_entry#',
            'description' => 'This is a description text',
            'bill_of_lading'=> 'This is a bill of ladding text',
            'tarrif' => 13,
            'weight' => 0,
            'quantity_of_boxes'=> 1,
            'manifest'=> 'This is a manifest text',
            'container' => 'c234j76',
        ]);
    }
}