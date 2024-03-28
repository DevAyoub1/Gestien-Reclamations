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
            "ville"=>$faker->city(),
            "description" => $faker->sentence(8),
            "status" => "En Cours",
            "idUser" =>rand(1,100) ,  // Pour que
        ];
    }
}
