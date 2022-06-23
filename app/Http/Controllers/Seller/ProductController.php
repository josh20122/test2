<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Image as ModelsImage;
use App\Models\Product;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;


class ProductController extends Controller
{
    public function index(Request $request)

    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }
        $shop = Shop::where('user_id', $userId)->first();

        $search = $request->input('search');

        $product = Product::query()
            ->whereHas('shop', function ($query) use ($shop) {
                $query->where('product_shop.shop_id', $shop->id);
            })
            ->when($search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->with('shop', 'category', 'category.country')
            ->latest()
            ->paginate();

        return Inertia::render('Seller/AllProducts', [
            'products' => $product,
        ]);
    }



    public function create(Request $request)
    {

        $countries = Country::with('cartegory')->get();

        return Inertia::render('Seller/CreateProduct', [
            'countries' => $countries
        ]);
    }

    public function store(Request $request)
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
            'status' => 'required',
            'stock' => 'required|numeric|min:1',
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

        $productid = $product->id;
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
        $images = ModelsImage::where('imageable_type', 'App\Models\Product')->where('imageable_id', $id)->orderBy('id', 'desc')->take(5)->get(['path', 'id', 'imageable_id']);
        return Inertia::render('Seller/EditProduct', [
            'product' => $product,
            'country' => $product->category()->first()->country()->first(),
            'category' => $product->category()->first(),
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
            'image1' => 'nullable|mimes:png,jpg,jpeg',
            'image2' => 'nullable|mimes:png,jpg,jpeg',
            'image3' => 'nullable|mimes:png,jpg,jpeg',
            'image4' => 'nullable|mimes:png,jpg,jpeg',
            'image5' => 'nullable|mimes:png,jpg,jpeg',
            'title' => 'required|string',
            'initial_price' => 'required|integer',
            'price' => 'required|integer',
            'short_description' => 'required',
            'category' => 'required',
            'country' => 'required',
            'long_description' => 'max:4294967289'
        ]);


        Product::find($id)->update([
            'title' => $request->input('title'),
            'short_description' => $validate['short_description'],
            'long_description' => $request->input('long_description'),
            'price' => $validate['price'],
            'initial_price' => $validate['initial_price'],
            'rating' => 5,
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
