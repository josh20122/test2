<?php

namespace App\Models;

use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements CanResetPassword, MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'name',
        'email',
        'password',
        'mobile',
        'country',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function wishlist()
    {
        return $this->hasOne(Wishlist::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function shop()
    {
        return $this->hasOne(Shop::class);
    }

    public function order()
    {
        return $this->hasMany(Order::class);
    }

    public function address()
    {
        return $this->hasOne(UserAddress::class);
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }
}
