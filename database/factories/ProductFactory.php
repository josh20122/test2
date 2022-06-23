<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'price' => $this->faker->numberBetween([300, 100000]),
            'initial_price' => $this->faker->numberBetween([400, 200000]),
            'title' => $this->faker->name(),
            'rating' => rand(1, 5),
            'short_description' => $this->faker->paragraph(),
            'approved' => $this->faker->boolean,
            'status' => $this->faker->boolean(),
            'long_description' => $this->faker->randomHtml(),

        ];
    }
}
