<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Seller/Dashboard');
    }

    public function products()
    {
        return Inertia::render('Seller/AllProducts');
    }

    public function application()
    {
        return Inertia::render('Seller/Application');
    }

    public function create(Request $request)
    {
        $passport = $request->file('passport');
        $document = $request->file('document');

        if ($passport && $passport->getSize() === false) {
            return back()->withErrors(['passport' => 'Passport size must be less than 2048Kib']);
        }
        if ($document && $document->getSize() === false) {
            return back()->withErrors(['document' => 'Document size must be less than 2048Kib']);
        }

        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'document' => 'required',
            'sub_region' => 'required|string',
            'region' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required',
            'city' => 'required|string',
            'passport' => 'required|max:2048|image|mimes:jpg,jpeg,png',
            'document' => 'required|max:2048|mimes:pdf,jpeg,jpg,png',
        ]);
        $user = User::find($request->user()->id);
        $userRole = $user->role;

        if ($userRole == 'ADMIN') {
            $approved = true;
        } else {
            $approved = false;
        }

        $user->shop()->create([
            'name' => $request->name,
            'description' => $request->description,
            'region' => $request->region,
            'sub_region' => $request->sub_region,
            'email' => $request->email,
            'approved' => $approved,
            'rejected' => false,
            'phone_number' => $request->phone_number,
            'city' => $request->city,
        ]);

        $passportname = Shop::latest()->first()->name . 'passport' . time() . $passport->getClientOriginalName();
        $documentname = Shop::latest()->first()->name . 'document' . time() . $passport->getClientOriginalName();

        Image::make($passport)->save("passports/{$passportname}");
        $document->move(public_path('/documents'), $documentname);

        $shopid = Shop::latest()->first()->id;
        $shop = Shop::find($shopid);

        $shop->image()->create([
            'path' => "/passports/{$passportname}",
        ]);
        $shop->image()->create([
            'path' => "/documents/{$documentname}",
        ]);

        return back();
    }
}
