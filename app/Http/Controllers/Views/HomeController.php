<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $country = Cookie::get('country');

        $featured = Product::query()
            ->when($country, function ($query) use ($country) {
                $query->whereHas('category.country', function ($query) use ($country) {
                    $query->where('id', $country);
                });
            })->whereHas('category', function ($query) {
                $query->where('status', true);
            })
            ->with('image', 'category.country')
            ->limit(12)
            ->get();

        $topRated = Product::query()
            ->when($country, function ($query) use ($country) {
                $query->whereHas('category.country', function ($query) use ($country) {
                    $query->where('id', $country);
                });
            })->whereHas('category', function ($query) {
                $query->where('status', true);
            })
            ->with('image', 'category.country')->limit(12)->get();

        $categories = Cartegory::query()->when($country, function ($query) use ($country) {
            $query->whereHas('country', function ($query) use ($country) {
                $query->where('id', $country);
            });
        })
            ->with(['image' => function ($image) {
                $image->pluck('path')->first();
            }])->limit(6)->get();

        $youMayLike = Product::query()
            ->when($country, function ($query) use ($country) {
                $query->whereHas('category.country', function ($query) use ($country) {
                    $query->where('id', $country);
                });
            })->whereHas('category', function ($query) {
                $query->where('status', true);
            })
            ->with('image', 'category.country')->limit(12)->get();

        return Inertia::render('Views/Home', [
            'featured' => $featured,
            'categories' => $categories,
            'topRated' => $topRated,
            'like' => $youMayLike,
        ]);
    }

    public function category($id)
    {

        $products = Product::whereHas('category', function ($query) use ($id) {
            $query->where('id', $id);
        })->with('image', 'category.country')
            ->paginate(36);
        $title = Cartegory::find($id)->title;

        return Inertia::render('Views/Category', [
            'product' => $products,
            'title' => $title,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('search');

        $search = Product::query()
            ->when($query, function ($product, $query) {
                $product->where('title', 'like', "%{$query}%");
            })
            ->whereHas('category', function ($query) {
                $query->where('status', true);
            })
            ->with('image', 'category.country')->paginate(36);

        return Inertia::render('Views/Search', [
            'search' => $search,
            'filter' => $query
        ]);
    }
}
