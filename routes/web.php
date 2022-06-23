<?php

use App\Http\Controllers\Admin\RandomController;
use App\Http\Controllers\Document\InvoiceController;
use App\Http\Controllers\Seller\ShopController;
use App\Http\Controllers\Views\AccountController;
use App\Http\Controllers\Views\CartController;
use App\Http\Controllers\Views\CheckoutController;
use App\Http\Controllers\Views\HomeController;
use App\Http\Controllers\Views\OrderController as ViewsOrderController;
use App\Http\Controllers\Views\ProductViewController;
use App\Http\Controllers\Views\SetCountryController;
use App\Http\Controllers\Views\UserController;
use App\Http\Controllers\Views\WishlistController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

Route::get('/auth', function () {
    $isAdmin = User::find(Auth::user()->id)->role;

    dd($isAdmin);

    return Auth::check() ? 'true' : 'false';
});

Route::controller(HomeController::class)->group(function () {
    Route::get('/category/{id}', 'category');
    Route::get('/', 'index')->name('home');
    Route::get('/search', 'search');
});

Route::controller(ProductViewController::class)->group(function () {
    Route::get('/product/{id}', 'view');
});

Route::controller(WishlistController::class)->middleware('auth')->group(function () {
    Route::get('/wishlist', 'index');
    Route::put('/wishlist/create/{id}', 'create');
    Route::put('/wishlist/remove/{id}', 'remove');
});

Route::controller(CartController::class)->middleware('auth')->group(function () {
    Route::get('/cart', 'index');
    Route::put('/cart/create/{id}', 'create');
    Route::put('/cart/remove/{id}', 'remove');
    Route::put('/cart/add/{id}', 'add');
    Route::put('/cart/minus/{id}', 'minus');
});

Route::controller(ViewsOrderController::class)->middleware('auth')->group(function () {
    Route::get('/orders', 'index');
    Route::put('/order/create', 'create');
});

Route::controller(UserController::class)->middleware('auth')->group(function () {
    Route::get('/update-avatar', 'updateAvatar');
});

Route::controller(CheckoutController::class)->middleware('auth')->group(function () {
    Route::get('checkout', 'index');
    Route::post('/checkout/address', 'address');
});

Route::view('/invoice', 'documents.invoice');

Route::controller(AccountController::class)->group(function () {
    Route::get('/update-details', 'index');
});

Route::put('/set-country', [SetCountryController::class, 'setCountry']);

Route::get('/account', function () {
    return Inertia::render('Views/Review');
});

Route::get('/print', [InvoiceController::class, 'print']);

Route::view('/pdf', 'documents.invoice');

Route::get('infinite', function () {
    return Inertia::render('Views/Infinite', [
        'user' => User::query()->paginate(12),
    ]);
});
