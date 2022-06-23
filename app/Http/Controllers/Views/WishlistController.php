<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use App\Models\Wishlist;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
    public function index(Request $request)
    {

        $user = User::find($request->user()->id);
        $wishlist = Wishlist::where('user_id', $user->id)->first();
        $products = Product::whereHas('wishlist', function ($query) use ($wishlist) {
            $query->where('product_wishlist.wishlist_id', $wishlist->id);
        })->with('image', 'category.country')
            ->paginate(10);

        $featured = Product::whereHas('category', function ($query) {
            $query->where('status', true);
        })
            ->with('image', 'category.country')->limit(12)->get();

        $topRated = Product::whereHas('category', function ($query) {
            $query->where('status', true);
        })
            ->with('image', 'category.country')->limit(12)->get();

        return Inertia::render('Views/Wishlist', [
            'wishlist' => $products,
            'featured' => $featured,
            'topRated' => $topRated,
        ]);
    }

    public function create(Request $request, $id)
    {
        $user = User::find($request->user()->id);
        $product = Product::find($id);

        if (!$user->wishlist()->exists()) {
            Wishlist::create([
                'user_id' => $user->id
            ]);
        }

        $wishlist = Wishlist::where('user_id', $user->id)->first();

        $present = Wishlist::where('id', $wishlist->id)->withCount(['product' => function ($query) use ($product) {
            $query->where('product_id', $product->id);
        }])->get();

        if ($present[0]->product_count < 1) {
            $product->wishlist()->attach($wishlist->id);
        }

        return back();
    }

    public function remove(Request $request, $id)
    {
        $user = $request->user();
        $wishlist = Wishlist::where('user_id', $user->id)->first();
        $wishlist->product()->detach($id);

        return back();
    }
}
