<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class SetCountryController extends Controller
{
    public function setCountry(Request $request)
    {
        $countryId = $request->input('id');

        Cookie::queue('country', $countryId, 241920);

        return redirect()->route('home');
    }
}
