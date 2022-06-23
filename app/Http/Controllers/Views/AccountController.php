<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        return Inertia::render('Views/Account');
    }
}
