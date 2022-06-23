<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function image()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function category()
    {
        return $this->belongsTo(Cartegory::class, 'cartegory_id', 'id');
    }

    public function cart()
    {
        return $this->belongsToMany(Cart::class)->withPivot('amount')->using(CartProduct::class);
    }

    public function shop()
    {
        return $this->belongsToMany(Shop::class, 'product_shop')->using(ProductShop::class)->withPivot('stock');
    }

    public function order()
    {
        return $this->belongsToMany(Order::class, 'order_product')->using(OrderProduct::class);
    }

    public function wishlist()
    {
        return $this->belongsToMany(Wishlist::class, 'product_wishlist');
    }
}
