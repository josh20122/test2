<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;
use Intervention\Image\Facades\Image;


class ShopController extends Controller
{
    public function index()
    {
        $shops = Shop::with('user')->withCount('product')->latest()->paginate();
        return Inertia::render('Admin/Shops', [
            'shops' => $shops,
        ]);
    }



    public function view($id)
    {
        $shop = Shop::find($id);
        return Inertia::render('Admin/ViewShop', [
            'form' => $shop,
            'user' => $shop->user,
            'country' => $shop->user->country
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CreateShop');
    }

    public function store(Request $request)
    {
        if ($request->file('image') && $request->file('image')->getSize() === false) {
            return redirect()->back()->withErrors(['image' => 'Image size mus be less than 2048Kib']);
        }

        $validate = $request->validate([
            'image' => 'required|image|mimes:png,jpg,jpeg',
            'name' => 'required|string|max:20',
            'description' => 'required|max:200',
            'status' => 'required',
            'city' => 'required',
            'region' => 'required',
            'sub_region' => 'required',
        ]);

        Shop::create([
            'name' => $validate['name'],
            'status' => $validate['status'],
            'city' => $validate['city'],
            'region' => $validate['region'],
            'sub_region' => $validate['sub_region'],
            'description' => $validate['description'],

        ]);
        $shopid = Shop::latest()->first()->id;
        $imagename = "shop{$shopid}" . now() . $request->file('image')->getClientOriginalName();

        Shop::find($shopid)->image()->create([
            'path' => "/shops/{$imagename}",
        ]);

        Image::make($request->file('image'))->save(public_path("shops/{$imagename}"));

        return redirect('/admin/shops');
    }

    public function update(Request $request, $id)
    {
        $image = $request->file('image');

        if ($image && $image->getSize() === false) {
            return redirect()->back()->withErrors(['image' => 'Image size must be less than 2040KiB']);
        }

        $validate = $request->validate([
            'image' => 'nullable|mimes:png,jpg,jpeg',
            'name' => 'required|string|max:20',
            'description' => 'required|max:200',
            'status' => 'required',
            'city' => 'required',
            'region' => 'required',
            'sub_region' => 'required',
        ]);

        Shop::where('id', $id)->update([
            'name' => $validate['name'],
            'status' => $validate['status'],
            'city' => $validate['city'],
            'region' => $validate['region'],
            'sub_region' => $validate['sub_region'],
            'description' => $validate['description'],
        ]);

        if ($image) {
            $imagename = "shop{$id}" . time() . $image->getClientOriginalName();

            if ($image && File::exists(substr($request->trash, 1))) {
                File::delete(public_path(substr($request->trash, 1)));
            }

            Shop::find($id)->image()->update([
                'path' => "/shops/{$imagename}",
            ]);

            Image::make($image)->save(public_path("shops/{$imagename}"));
        }


        return redirect()->back();
    }

    public function approve($id)
    {
        Shop::query()->where('id', $id)->update([
            'approved' => 1,
        ]);

        return back();
    }

    public function reject($id)
    {
        Shop::query()->where('id', $id)->update([
            'rejected' => 1,
        ]);

        return back();
    }
}
