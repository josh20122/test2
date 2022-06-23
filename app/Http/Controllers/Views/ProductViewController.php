<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductViewController extends Controller
{
    public function view($id)
    {
        $product = Product::query()->find($id);
        $image = $product->image()->get();
        $categoryId = $product->cartegory_id;
        $related = Product::query()->whereHas('category', function ($query) use ($categoryId) {
            $query->where('id', $categoryId);
        })->with('category.country', 'image')->paginate(36);

        return Inertia::render('Views/ViewProduct', [
            'product' => $product,
            'images' => $image,
            'id' => $categoryId,
            'related' => $related,
        ]);
    }
}
