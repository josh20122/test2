<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartegory extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function subcategories()
    {
        return $this->hasMany(SubCategory::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
