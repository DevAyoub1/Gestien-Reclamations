<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reclamation>
 */
class ReclamationFactory extends Factory
{
   
    public function definition(): array
    {
        $faker = Faker::create();
        return [
            "description" => $faker->sentence(8),
            "status" => "En Cours",
            "IdClient" => rand(1,20),
        ];
    }
}
