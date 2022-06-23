<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $guarded = [];
    public function cartegory()
    {
        return $this->hasMany(Cartegory::class);
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function product()
    {
        return $this->hasManyThrough(Product::class, Cartegory::class);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
