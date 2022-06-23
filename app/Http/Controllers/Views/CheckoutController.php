<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\CartProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $cart = $user->cart;
        Product::query()->whereHas('cart', function ($query) use ($cart) {
            $query->where('cart_product.cart_id', $cart->id);
        })->get();
        $phone = $user->country->country_code;
        return Inertia::render('Views/Checkout', [
            'phone' => $phone,
        ]);
    }

    public function address(Request $request)
    {
        $user = $request->user();
        $validate = $request->validate([
            'first_name' => 'required|max:10',
            'last_name' => 'required|max:10',
            'city' => 'required|max:10',
            'region' => 'required|max:10',
            'sub_region' => 'required|max:10',
            'phone_number' => 'required|numeric',
            'second_phone_number' => 'nullable|numeric',
            'delivery_address' => 'required|string|max:20'
        ]);

        $user->address()->create($validate);

        return back();
    }
}
