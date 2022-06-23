<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Image as ModelsImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;


class CartegoryController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $cartegory = Cartegory::query()
            ->when($search, function ($query, $search) {
                $query->where('title', 'like', $search);
            })
            ->with('country')->latest()->paginate(15);
        return Inertia::render('Admin/ViewCartegory', [
            'cartegory' => $cartegory,
            'filter' => $search,
        ]);
    }

    public function edit($id)
    {
        $category = Cartegory::find($id);
        $countries = Country::pluck('country');

        $image_path = $category->image->path;

        return Inertia::render('Admin/EditCategory', [
            'path' => $image_path,
            'category' => $category,
            'countries' => $countries
        ]);
    }

    public function editAvatar(Request $request, $id)
    {
        $img = $request->file('avatar');
        if ($img && $img->getSize() === false) {
            return redirect()->back()->withErrors(['avatar' => 'Avatar size should be less than 2048 KiB']);
        }

        $request->validate([
            'avatar' => 'required|mimes:png,jpg,jpeg|image|file',
        ]);

        $imagename = time() . $img->getClientOriginalName();

        Image::make($img)->resize(400, 400)->save("thumbnails/{$imagename}");

        $trash = $request->input('trash');

        File::exists(public_path($trash));

        if (File::exists(public_path($trash))) {
            File::delete(public_path($trash));
        }

        ModelsImage::where('imageable_id', $id)->where('imageable_type', 'App\Models\Cartegory')->update([
            'path' => "/thumbnails/{$imagename}",
        ]);

        return redirect()->back();
    }

    public function updateInfo(Request $request, $id)
    {

        $validate = $request->validate([
            'title' => 'required',
            'status' => 'required',
        ]);


        Cartegory::where('id', $id)->update([
            'title' => $validate['title'],
            'description' => $request->input('description'),
            'status' => $validate['status'] == 'ACTIVE' ? true : false,
        ]);

        return redirect()->back();
    }

    public function create()
    {
        $countries = Country::all();
        return Inertia::render('Admin/CreateCartegory', [
            'countries' => $countries,
        ]);
    }

    public function store(Request $request)
    {
        $avatar = $request->file('avatar');
        if ($avatar && $avatar->getSize() === false) {
            return redirect()->back()->withErrors(['avatar' => 'Avater size should be less than 2048KiB']);
        }

        $validate = $request->validate([
            'title' => 'required|string|max:20',
            'country' => 'required|string|max:20',
            'status' => 'required',
            'avatar' => 'required|mimes:png,jpg,jpeg',

        ]);

        Country::find($validate['country'])->cartegory()->create([
            'title' => $validate['title'],
            'status' => $validate['status'] == 'ACTIVE' ? true : false,
            'description' => $request->input('description'),
        ]);

        $avatarname = time() . $avatar->getClientOriginalName();

        Image::make($avatar)->resize(400, 400)->save("thumbnails/{$avatarname}");

        $model = Cartegory::latest()->first();
        $model->image()->create([
            'path' => "/thumbnails/{$avatarname}",
        ]);

        return redirect()->route('admin.cartegories');
    }
}
