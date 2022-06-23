<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\UserController;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Authentication
Route::prefix('/auth')->group(function () {
    //Registration
    Route::get('/register', [RegisterController::class, 'index'])->name('auth.register');
    Route::post('/register', [RegisterController::class, 'register']);

    //Login
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);

    //logout
    Route::get('/logout', function (Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    })->middleware('auth')->name('logout');

    //password Reset Add guest middleware for production
    Route::get('/forgot-password', [PasswordResetController::class, 'index']);
    Route::post('/forgot-password', [PasswordResetController::class, 'sendmail']);
    Route::get('/reset-password/{token}', [PasswordResetController::class, 'resetview'])->name('password.reset');
    Route::post('/reset-password', [PasswordResetController::class, 'resetpassword']);


    //Email verification
    Route::get('/email/verify', [EmailVerificationController::class, 'index'])->name('verification.notice');
    Route::get('/email/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify');
    Route::post('/email/verification-notification', [EmailVerificationController::class, 'emailnotification']);
});
