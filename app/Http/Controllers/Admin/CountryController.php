<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class CountryController extends Controller
{
    public function create()
    {
        return Inertia::render('Admin/CreateCountry');
    }

    public function store(Request $request)
    {
        $flag = $request->file('flag');
        if ($flag && $flag->getSize() === false) {
            return back()->withErrors(['flag' => 'The image size must be less than 2048Kib']);
        }
        $validate = $request->validate([
            'country_name' => 'required|alpha|unique:countries,country',
            'currency_code' => 'required|alpha|unique:countries,currency|max:3|min:3',
            'status' => 'required',
            'phone_code' => 'required|numeric',
            'flag' => 'required|mimes:jpg,jpeg,png',
        ]);

        $coutry = Country::create([
            'country' => $validate['country_name'],
            'currency' => $validate['currency_code'],
            'status' => $validate['status'],
            'country_code' => $validate['phone_code']
        ]);

        $countryName = $coutry->country . time() . $flag->getClientOriginalName();
        Image::make($flag)->resize(300, 300)->save(public_path("/country/{$countryName}"));

        $coutry->image()->create([
            'path' => "/country/{$countryName}",
        ]);

        return redirect()->back();
    }

    public function view()
    {
        $country = Country::withCount('cartegory', 'user', 'product')->latest()->paginate();
        return Inertia::render('Admin/AllCountries', [
            'country' => $country,
        ]);
    }
}
