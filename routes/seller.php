<?php

use App\Http\Controllers\Document\InvoiceController;
use App\Http\Controllers\Seller\DashboardController;
use App\Http\Controllers\Seller\OrderController;
use App\Http\Controllers\Seller\ProductController;
use App\Http\Controllers\Seller\ShopController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'seller'])->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/', 'index');
        Route::get('/products', 'products');

        Route::get('/product/create', 'create');
        Route::get('/application', 'application');
        Route::post('/create', 'create');
    });


    Route::controller(ProductController::class)->group(function () {
        Route::get('/product/create', 'create');
        Route::post('/product/store', 'store');
        Route::get('/product/edit/{id}', 'edit');
        Route::get('/products', 'index');
    });

    Route::controller(OrderController::class)->group(function () {
        Route::get('/pending-orders', 'pendingOrders');
        Route::get('/completed-orders', 'completedOrders');
    });

    Route::controller(ShopController::class)->group(function () {
        Route::get('/shop/view', 'view');
        Route::post('/shop/update', 'update');
    });

    Route::controller(InvoiceController::class)->group(function () {
        Route::get('/print', 'print');
    });
});
