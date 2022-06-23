<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $users = User::count();
        $sellers = User::has('shop')->count();
        $countries = Country::count();
        $activeCountry = Country::where('status', true)->count();
        $categories = Cartegory::count();
        $product = Product::count();


        return Inertia::render('Admin/Dashboard', [
            'user' => $users,
            'seller' => $sellers,
            'allCountry' => $countries,
            'activeCountry' => $activeCountry,
            'category' => $categories,
            'product' => $product,
        ]);
    }
}
