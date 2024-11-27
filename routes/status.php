<?php
use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/status-get', [StatusController::class, 'view'])->name('status-get');
    Route::put('/status-update/{id}', [StatusController::class, 'update'])->name('status-update');
});
