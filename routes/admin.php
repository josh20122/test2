<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\CartegoryController;
use App\Http\Controllers\Admin\CountryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DownloadController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RandomController;
use App\Http\Controllers\Admin\SellerController;
use App\Http\Controllers\Admin\ShopController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Models\Cartegory;
use App\Models\Country;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Image as ModelsImage;
use App\Models\Product;
use GuzzleHttp\Middleware;

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::controller(AdminUserController::class)->group(function () {
        Route::get('/users', 'index');
        Route::get('/users/{id}',  'show')->name('admin.viewuser');
        Route::post('/update-user-profile/{id}', 'updateprofile');
        Route::post('/update-user-info/{id}', 'updateinfo');
        Route::get('/update-admin', 'updateAdmin');
    });

    Route::controller(CartegoryController::class)->group((function () {
        Route::get('/cartegory', 'index')->name('admin.cartegories');
        Route::get('/cartegory/edit/{id}', 'edit');
        Route::post('/cartegory/edit-avatar/{id}', 'editAvatar');
        Route::post('/cartegory/edit-info/{id}', 'updateInfo');
        Route::get('/cartegory/create', 'create');
        Route::post('/cartegory/create', 'store');
    }));

    Route::controller(RandomController::class)->group(function () {
        Route::post('/cartegory/status/{id}', 'categoryStatus');
        Route::post('/shop/status/{id}', 'shopstatus');
        Route::put('/country/status/{id}', 'countryStatus');
    });

    Route::get('test', function () {
        return ModelsImage::latest()->get();
    });

    Route::controller(ProductController::class)->group(function () {
        Route::get('/product/create', 'create');
        Route::post('/product/store', 'store');
        Route::get('/products', 'index');
        Route::get('/products/edit/{id}', 'edit');
        Route::post('/products/update/{id}', 'update');
    });


    Route::controller(ShopController::class)->group(function () {
        Route::get('/shops', 'index');
        Route::get('/shop/view/{id}', 'view');
        Route::post('/shop/update/{id}', 'update');
        Route::get('/shop/create', 'create');
        Route::post('/shop/store', 'store');
        Route::put('/shop/reject/{id}', 'reject');
        Route::put('/shop/approve/{id}', 'approve');
    });

    Route::controller(CountryController::class)->group(function () {
        Route::get('/country/create', 'create');
        Route::post('/country/store', 'store');
        Route::get('/country', 'view');
    });

    Route::controller(DownloadController::class)->group(function () {
        Route::get('/download-seller-passport/{id}', 'downloadSellerPassport');
        Route::get('/download-seller-business-document/{id}', 'downloadSellerBusinessDocument');
    });
});
