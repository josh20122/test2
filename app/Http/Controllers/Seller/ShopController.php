<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function view(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }

        $shop = User::find($userId)->shop;

        return Inertia::render('Seller/ViewShop', [
            'shop' => $shop,
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $userId = $user->id;
        } else {
            return redirect()->route('login');
        }
        $validation = $request->validate([
            'name' => 'required',
            'city' => 'required',
            'description' => 'required',
            'region' => 'required',
            'sub_region' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
        ]);

        $user->shop()->update($validation);

        return back();
    }
}
