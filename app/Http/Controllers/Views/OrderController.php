<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {

        return Inertia::render('Views/Order');
    }

    public function create(Request $request)
    {
        $user = $request->user();
        $userId = $user->id;
        $cart = Cart::where('user_id', $userId)->first();
        $cartId = $cart->id;

        $allProductIds = CartProduct::where('cart_id', $cart->id)->pluck('product_id');

        foreach ($allProductIds as $singleId) {
            $amount = CartProduct::where('cart_id', $cartId)
                ->where('product_id', $singleId)
                ->first()
                ->amount;
            $price = Product::find($singleId)->price;

            $order = Order::create([
                'user_id' => $userId,
                'total' => $amount * $price,
                'amount' => $amount,
                'price' => $price,
                'status' => 'PENDING',
            ]);

            $product = Product::find($singleId)->order()->attach($order->id);

            $cart->product()->detach($singleId);
        }
    }
}
