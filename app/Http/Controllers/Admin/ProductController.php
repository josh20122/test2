<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Image as ModelsImage;
use App\Models\Product;
use App\Models\ProductShop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $countries = Country::all();
        $search = $request->input('search');
        $countrysearch = $request->input('country');
        $products = Product::query()->when($countrysearch, function ($query, $countrysearch) {
            $query->whereHas('category.country', function ($country) use ($countrysearch) {
                $country->where('id', $countrysearch);
            });
        })->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })->with('category', 'category.country')->orderBy('id', 'desc')->paginate(15)->withQueryString();


        return Inertia::render('Admin/AllProducts', [
            'products' => $products,
            'filters' => $search,
            'countries' => $countries,
        ]);
    }

    public function create()
    {
        $countries = Country::with('cartegory')->get();


        return Inertia::render('Admin/CreateProduct', [
            'countries' => $countries
        ]);
    }
    public function store(Request $request)
    {
        $hasShop = User::find($request->user()->id)->shop;
        if (!$hasShop) {
            return back()->withErrors(['shop' => 'Please register a seller first.']);
        }

        if ($request->file('image1') && $request->file('image1')->getSize() === false) {
            return redirect()->back()->withErrors(['image1' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image2') && $request->file('image2')->getSize() === false) {
            return redirect()->back()->withErrors(['image2' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image3') && $request->file('image3')->getSize() === false) {
            return redirect()->back()->withErrors(['image3' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image4') && $request->file('image4')->getSize() === false) {
            return redirect()->back()->withErrors(['image4' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image5') && $request->file('image5')->getSize() === false) {
            return redirect()->back()->withErrors(['image5' => 'Image size must be less than 2048Kib']);
        }

        $validate = $request->validate([
            'image1' => 'required|image|mimes:png,jpg,jpeg',
            'image2' => 'required|mimes:png,jpg,jpeg',
            'image3' => 'required|mimes:png,jpg,jpeg',
            'image4' => 'required|mimes:png,jpg,jpeg',
            'image5' => 'required|mimes:png,jpg,jpeg',
            'title' => 'required|string',
            'initial_price' => 'required|integer',
            'price' => 'required|integer',
            'short_description' => 'required',
            'category' => 'required',
            'stock' => 'required|numeric|min:1',
            'status' => 'required',
            'country' => 'required',
            'long_description' => 'max:4294967289'
        ]);

        $country = Country::find($request->input('country'));
        $category = $country->cartegory()->find($request->input('category'));
        $product =  $category->product()->create([
            'title' => $request->input('title'),
            'short_description' => $validate['short_description'],
            'long_description' => $request->input('long_description'),
            'price' => $validate['price'],
            'initial_price' => $validate['initial_price'],
            'rating' => 5,
            'status' => $validate['status'],
            'approved' => true
        ]);


        $productid = Product::latest()->first()->id;
        $user = $request->user();
        $shop = $user->shop;
        //attach and add stock
        $product->shop()->attach($shop->id, ['stock' => $validate['stock']]);

        $image1 = 'image1' . '-' . time() . '-' . $request->file('image1')->getClientOriginalName();
        $image2 = 'image2' . '-' . time() . '-' . $request->file('image2')->getClientOriginalName();
        $image3 = 'image3' . '-' . time() . '-' . $request->file('image3')->getClientOriginalName();
        $image4 = 'image4' . '-' . time() . '-' . $request->file('image4')->getClientOriginalName();
        $image5 = 'image5' . '-' . time() . '-' . $request->file('image5')->getClientOriginalName();

        Image::make($request->file('image1'))->resize(250, 270)->save(public_path("thumbnails/{$image1}"));
        Image::make($request->file('image1'))->save(public_path("products/{$image1}"));
        Image::make($request->file('image2'))->save(public_path("products/{$image2}"));
        Image::make($request->file('image3'))->save(public_path("products/{$image3}"));
        Image::make($request->file('image4'))->save(public_path("products/{$image4}"));
        Image::make($request->file('image5'))->save(public_path("products/{$image5}"));

        ModelsImage::insert(
            [
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/thumbnails/{$image1}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image1}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image2}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image3}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image4}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image5}", 'created_at' => now(), 'updated_at' => now()],
            ],
        );

        return redirect()->back();
        // $request->validate([]);
    }

    public function edit(Request $request, $id)
    {
        $product = Product::find($id);
        $stock = $product->shop->first()->pivot->stock;
        $images = ModelsImage::where('imageable_type', 'App\Models\Product')->where('imageable_id', $id)->orderBy('id', 'desc')->take(5)->get(['path', 'id', 'imageable_id']);
        return Inertia::render('Admin/EditProduct', [
            'product' => $product,
            'country' => $product->category()->first()->country()->first(),
            'category' => $product->category()->first(),
            'stock' => $stock,
            'images' => $images
        ]);
    }

    public function update(Request $request, $id)
    {
        if ($request->file('image1') && $request->file('image1')->getSize() === false) {
            return redirect()->back()->withErrors(['image1' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image2') && $request->file('image2')->getSize() === false) {
            return redirect()->back()->withErrors(['image2' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image3') && $request->file('image3')->getSize() === false) {
            return redirect()->back()->withErrors(['image3' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image4') && $request->file('image4')->getSize() === false) {
            return redirect()->back()->withErrors(['image4' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image5') && $request->file('image5')->getSize() === false) {
            return redirect()->back()->withErrors(['image5' => 'Image size must be less than 2048Kib']);
        }

        $validate = $request->validate([
            'image1' => 'nullable|mimes:png,jpg,jpeg|max:2040',
            'image2' => 'nullable|mimes:png,jpg,jpeg|max:2040',
            'image3' => 'nullable|mimes:png,jpg,jpeg|max:2040',
            'image4' => 'nullable|mimes:png,jpg,jpeg|max:2040',
            'image5' => 'nullable|mimes:png,jpg,jpeg|max:2040',
            'title' => 'required|string',
            'initial_price' => 'required|integer',
            'price' => 'required|integer',
            'short_description' => 'required',
            'stock' => 'required|numeric|min:1',
            'category' => 'required',
            'country' => 'required',
            'long_description' => 'max:4294967289'
        ]);

        dd('one');
        Product::find($id)->update([
            'title' => $request->input('title'),
            'short_description' => $validate['short_description'],
            'long_description' => $request->input('long_description'),
            'price' => $validate['price'],
            'initial_price' => $validate['initial_price'],
            'rating' => 5,
        ]);


        ProductShop::where('product_id', $id)->update([
            'stock' => $validate['stock'],
        ]);

        $images = ModelsImage::where('imageable_id', $id)->where('imageable_type', 'App\Models\Product');

        if ($request->file('image1')) {
            $image1 = 'image1' . '-' . time() . '-' . $request->file('image1')->getClientOriginalName();
            Image::make($request->file('image1'))->resize(250, 270)->save(public_path("thumbnails/{$image1}"));
            Image::make($request->file('image1'))->save(public_path("products/{$image1}"));

            if (File::exists(public_path(substr($images->first()->path, 1)))) {
                File::delete(public_path(substr($images->first()->path, 1)));
            }
            if (File::exists(public_path(substr($images->skip(1)->first()->path, 1)))) {
                File::delete(public_path(substr($images->skip(1)->first()->path, 1)));
            }
            ModelsImage::where('id', $images->first()->id)->update([
                'path' => "/thumbnails/{$image1}",
            ]);
            ModelsImage::where('id', $images->skip(1)->first()->id)->update([
                'path' => "/products/{$image1}",
            ]);
        }

        if ($request->file('image2')) {
            $image2 = 'image2' . '-' . time() . '-' . $request->file('image2')->getClientOriginalName();
            Image::make($request->file('image2'))->save(public_path("products/{$image2}"));
            if (File::exists(public_path(substr($images->skip(2)->first()->path, 1)))) {
                File::delete(public_path(substr($images->skip(2)->first()->path, 1)));
            }
            ModelsImage::where('id', $images->skip(2)->first()->id)->update([
                'path' => "/products/{$image2}",
            ]);
        }

        if ($request->file('image3')) {
            $image3 = 'image3' . '-' . time() . '-' . $request->file('image3')->getClientOriginalName();
            Image::make($request->file('image3'))->save(public_path("products/{$image3}"));
            if (File::exists(public_path(substr($images->skip(3)->first()->path, 1)))) {
                File::delete(public_path(substr($images->skip(3)->first()->path, 1)));
            }
            ModelsImage::where('id', $images->skip(3)->first()->id)->update([
                'path' => "/products/{$image3}",
            ]);
        }

        if ($request->file('image4')) {
            $image4 = 'image4' . '-' . time() . '-' . $request->file('image4')->getClientOriginalName();
            Image::make($request->file('image4'))->save(public_path("products/{$image4}"));
            if (File::exists(public_path(substr($images->skip(4)->first()->path, 1)))) {
                File::delete(public_path(substr($images->skip(4)->first()->path, 1)));
            }
            ModelsImage::where('id', $images->skip(4)->first()->id)->update([
                'path' => "/products/{$image4}",
            ]);
        }

        if ($request->file('image5')) {
            $image5 = 'image5' . '-' . time() . '-' . $request->file('image5')->getClientOriginalName();
            Image::make($request->file('image5'))->save(public_path("products/{$image5}"));
            if (File::exists(public_path(substr($images->skip(5)->first()->path, 1)))) {
                File::delete(public_path(substr($images->skip(5)->first()->path, 1)));
            }
            ModelsImage::where('id', $images->skip(5)->first()->id)->update([
                'path' => "/products/{$image5}",
            ]);
        }





        return redirect()->back();
    }
}
