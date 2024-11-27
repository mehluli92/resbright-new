<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Menokws',
            'surname' => 'Admin',
            'email' => 'admin@menokws.co.zw',
            'mobile' => '+263782140816',
            'role' => '1',
            'password' => Hash::make('aaaaaaaa'),
        ]);
    }
}