<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Product;
use App\Models\ProductShop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public $total;
    public function index(Request $request)
    {
        $user = $request->user();
        $cartid = Cart::where('user_id', $user->id)->first()->id;

        $cart = Product::whereHas('cart', function ($query) use ($cartid) {
            $query->where('cart_product.cart_id', $cartid);
        })
            ->with('image', 'cart', 'shop', 'category.country')
            ->paginate();


        $featured = Product::whereHas('category', function ($query) {
            $query->where('status', true);
        })
            ->with('image', 'category.country')->limit(12)->get();

        $all = CartProduct::where('cart_id', $cartid)->latest();

        for ($index = 0; $index < $all->count(); $index++) {
            $productid = $all->get()[$index]->product_id;

            $amount = CartProduct::where('cart_id', $cartid)
                ->where('product_id', $productid)
                ->first()
                ->amount;
            $price = Product::find($productid)->price;

            $this->total += $amount * $price;
        }

        return Inertia::render('Views/Cart', [
            'cart' => $cart,
            'featured' => $featured,
            'total' => round($this->total, 2),
        ]);
    }

    public function create(Request $request, $id)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }
        $input = $request->input('amount');
        $amount = 1;
        if ($input > 0) {
            $amount = $request->input('amount');
        }
        $user = User::find($request->user()->id);
        $product = Product::find($id);

        if (!$user->cart()->exists()) {
            Cart::create([
                'user_id' => $user->id
            ]);
        }

        $cart = Cart::where('user_id', $user->id)->first();

        $present = Cart::where('id', $cart->id)->withCount(['product' => function ($query) use ($product) {
            $query->where('product_id', $product->id);
        }])->get();

        printf($present[0]->product_count);

        if ($present[0]->product_count < 1) {
            $product->cart()->attach($cart->id, ['amount' => $amount]);
        }

        return back();
    }

    public function remove(Request $request, $id)
    {
        $user = User::find($request->user()->id);
        $product = Product::find($id);

        $product->cart()->detach($user->id);

        return back();
    }

    public function add(Request $request, $id)
    {
        $user = User::find($request->user()->id);
        $product = Product::find($id);
        $stock = Product::query()->find($id)->shop[0]->pivot->stock;

        if ($stock > 0) {
            $cart = Cart::where('user_id', $user->id)->first();
            $model = CartProduct::where('product_id', $product->id)
                ->where('cart_id', $cart->id)
                ->first();

            CartProduct::where('product_id', $product->id)
                ->where('cart_id', $cart->id)->update([
                    'amount' => $model->amount + 1
                ]);
            return back();
        } else {
            return back()->withErrors(['stock' => 'This Product stock has depleted']);
        }
    }

    public function minus(Request $request, $id)
    {
        $user = User::find($request->user()->id);
        $product = Product::find($id);

        $cart = Cart::where('user_id', $user->id)->first();
        $model = CartProduct::where('product_id', $product->id)
            ->where('cart_id', $cart->id)
            ->first();

        if ($model->amount > 1) {
            CartProduct::where('product_id', $product->id)
                ->where('cart_id', $cart->id)->update([
                    'amount' => $model->amount - 1
                ]);
        }

        return back();
    }
}
