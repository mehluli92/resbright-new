<?php
use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/payment-get', [PaymentController::class, 'view'])->name('payment-get');
    Route::post('/payment-create', [PaymentController::class, 'store'])->name('payment-store');
    Route::post('/payment-update', [PaymentController::class, 'update'])->name('payment-update');
});
