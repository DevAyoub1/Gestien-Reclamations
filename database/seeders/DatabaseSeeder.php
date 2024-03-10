<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Client;
use App\Models\Reclamation;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        
        Admin::factory(5)->create();
       
        foreach (range(1,10) as $index) {
            Client::factory(10)->create();
            Reclamation::factory(20)->create();

            foreach (range(1,30) as $index) {
                Reclamation::factory(10)->create([
                    "IdClient" => rand(1,20),
                ]);
            }
        }
    }
}
