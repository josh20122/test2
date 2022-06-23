<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/EmailVerification');
    }

    public function verify(EmailVerificationRequest $request)
    {
        $request->fulfill();

        return redirect('/');
    }

    public function emailnotification(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back();
    }
}
