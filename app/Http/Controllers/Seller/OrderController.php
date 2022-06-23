<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\Shop;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function pendingOrders(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }
        $shop =   $user->shop;

        $product = Order::query()
            ->whereHas('product.shop', function ($query) use ($shop) {
                $query->where('shop_id', '=', $shop->id);
            })
            // ->where('status', 'like', '%PENDIN%')
            ->with('product.image', 'product.category.country')
            ->get();

        return $product;

        return Inertia::render('Seller/PendingOrder', [
            'product' => $product,
        ]);
    }

    public function completedOrders(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }
        $shop = Shop::query()->where('user_id', $userId)->first();
        $product = Order::query()
            ->whereHas('product.shop', function ($query) use ($shop) {
                $query->where('product_shop.shop_id', $shop->id);
            })
            ->where('status', 'like', '%Pending%')
            ->with('product.image', 'product.category.country')
            ->paginate();

        return Inertia::render('Seller/CompletedOrder', [
            'product' => $product,
        ]);
    }
}
