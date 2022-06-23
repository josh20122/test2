<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image as ModelsImage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    public function updateAdmin(Request $request)
    {
        $id = Auth::user()->id;
        $user = User::find($id);
        $image = $user->image->path;
        return Inertia::render('Admin/UpdateAdmin', [
            'user' => $user,
            'country' => $user->country->country,
            'path' => $image,
        ]);
    }
    public function index(Request $request)

    {
        $filter = $request->input('filter');
        $users = User::query()->when($filter, function ($query, $search) {
            $query->where('mobile', 'like', '%' . $search . '%')->orWhere('name', 'like', '%' . $search . '%')->orWhere('email', 'like', '%' . $search . '%');
        })->with('country')->orderBy('id', 'DESC');

        $count = User::query()->count();

        return Inertia::render('Admin/Users', [
            'users' => $users->paginate('15')->withQueryString(),
            'query' => $filter,
            'count' => $count,
            'filterCount' => $users->count()
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);
        $image = $user->image->path;

        return Inertia::render('Admin/ViewUser.vue', [
            'user' => $user,
            'country' => $user->country->country,
            'path' => $image,
        ]);
    }

    public function updateprofile(Request  $request, $id)
    {
        $img = $request->file('image');
        if ($img && $img->getSize() === false) {
            return redirect()->back()->withErrors(['image' => 'Profile must be less than 2048KiB']);
        }

        $hasDefaultAvatar = ModelsImage::query()->where('imageable_id', $id)->where('imageable_type', 'App\Models\User')
            ->where('path', 'like', '/avatar/avatar.png')->exists();

        $request->validate([
            'image' => 'max:2048|required|mimes:png,jpg,jpeg'
        ]);
        $imagename = time() . '-'   . $img->getClientOriginalName();

        $file = ModelsImage::where('imageable_type', 'App\Models\User')->where('imageable_id', $id)->get();


        if (!$hasDefaultAvatar) {

            if (File::exists(public_path($request->trash))) {
                File::delete(public_path($request->trash));
            }
        }

        Image::make($img)->resize(300, 300)->save("thumbnails/{$imagename}");

        ModelsImage::where('imageable_type', 'App\Models\User')->where('imageable_id', $id)->update([
            'path' => "/thumbnails/{$imagename}",
        ]);

        return redirect()->back();
    }

    public function updateinfo(Request $request, $id)
    {

        $update = $request->validate([
            'role' => 'required',
            'mobile' => 'required',
            'name' => 'required|string',
            'email' => 'required|email',

        ]);

        User::where('id', $id)->update($update);

        return redirect()->back();
    }
}
