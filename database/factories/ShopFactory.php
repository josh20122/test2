<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()

    {

        return [
            'name' => $this->faker->company(),
            'description' => $this->faker->realText(),
            'region' => $this->faker->country(),
            'sub_region' => $this->faker->city(),
            'city' => $this->faker->city(),
            'email' => $this->faker->safeEmail(),
            'phone_number' => $this->faker->e164PhoneNumber(),
            'approved' => $this->faker->boolean(),
            'rejected' => $this->faker->boolean()
        ];
    }
}
