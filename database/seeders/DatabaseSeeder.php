<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Client;
use App\Models\Reclamation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        
        // DB::table('users')->insert([
        //     'nom'=>'moujniba',
        //     'prenom'=>"abdelghani",
        //     'email'=>"moujniba@gmail.com",
        //     'password'=>bcrypt('password'),
        //     "telephone"=>"989874838",
        //     "adresse"=>"Tanger-Dar el beida",

        // ]);
        DB::table('admins')->insert([
            'name'=>'admin',
            "email"=>"admin@admin.com",
            "password"=> bcrypt("12345678")
        ]);
       
    //     foreach (range(1,10) as $index) {
    //         Client::factory(10)->create();
    //         Reclamation::factory(20)->create();

    //         foreach (range(1,30) as $index) {
    //             Reclamation::factory(10)->create([
    //                 "IdClient" => rand(1,20),
    //             ]);
    //         }
       }
     
}
