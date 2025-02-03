<?php
use App\Http\Controllers\PriceController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/price-get', [PriceController::class, 'view'])->name('price-get');
    Route::post('/price-create', [PriceController::class, 'store'])->name('price-store');
    Route::post('/price-update', [PriceController::class, 'update'])->name('price-update');
});
