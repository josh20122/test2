<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        $countries = Country::where('status', true)->get();
        return Inertia::render('Auth/Register', [
            'countries' => $countries,
        ]);
    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|',
            'phone_number' => 'required|numeric',
            'country' => 'required',
            'email' => 'required|email|string|max:50|unique:users,email,',
            'password' => 'required|string|min:8|max:50|alpha_num|confirmed',
            'password_confirmation' => 'required'
        ]);

        $user =   Country::find($fields['country'])->user()->create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
            'mobile' => $request->input('real_phone'),
            'role' => 'USER',
        ]);


        if (Auth::attempt(['email' => $user->email, 'password' => $fields['password']])) {
            $request->session()->regenerate();
        }


        $user->cart()->create();
        $user->image()->create([
            'path' => '/avatar/avatar.png',
        ]);

        $user->wishlist()->create();

        return redirect('/');
    }
}
