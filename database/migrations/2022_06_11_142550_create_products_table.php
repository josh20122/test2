<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cartegory_id')->nullable();
            $table->text('short_description');
            $table->longText('long_description')->nullable();
            $table->bigInteger('price');
            $table->bigInteger('rating');
            $table->bigInteger('initial_price');
            $table->boolean('approved');
            $table->boolean('status');
            $table->string('title');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
