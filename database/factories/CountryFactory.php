<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Country>
 */
class CountryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $countries = [
            'Kenya',
            'Canada',
            'Turkey',
            'United Kingdom',
            'United States Of America',
        ];
        $random = array_rand($countries);


        return [
            'country' => $this->faker->country(),
            'currency' => $this->faker->currencyCode(),
            'status' => $this->faker->boolean(),
            'country_code' => rand(111, 353),
        ];
    }
}
