<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image as ImageFiles;



class UserController extends Controller
{

    public function updateAvatar(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }
        $image = $user->image->path;

        $avatar = $request->file('avatar');
        //validate size
        if ($avatar && $avatar->getSize() === false) {
            return back()->withErrors(['avatar' => 'The avatar must be less than 2048Kib']);
        }

        $hasOriginalAvatar = Image::where('imageable_type', 'App\Models\User')
            ->where('imageable_id', $userId)
            ->where('path', 'like', "%avatar/avatar.png%")->exists();

        $request->validate([
            'avatar' => 'required|image|mimes:png,jpg,jpeg',
        ]);
        $imageName = $userId . '-' . time() . $avatar->getClientOriginalName();
        ImageFiles::make($image)->resize(400, 400)->save(public_path("avatar/{$imageName}"));
        $user->image()->update([
            'path' => "/avatar/{$imageName}",
        ]);

        if (!$hasOriginalAvatar) {
            if (File::exists(public_path(substr($image, 1)))) {
                File::delete(public_path(substr($image, 1)));
            }
        }
        return 'done';
    }
}
