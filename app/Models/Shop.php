<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function product()
    {
        return $this->belongsToMany(Product::class);
    }
}
