<?php
use App\Http\Controllers\RbFileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/file-all', [RbFileController::class, 'index'])->name('file-all');
    Route::get('/file/{id}', [RbFileController::class, 'editForm'])->name('file-edit-form');
    Route::get('/file/view/{id}', [RbFileController::class, 'view'])->name('file-view');
    Route::get('/file-create-form', action: [RbFileController::class, 'createForm'])->name('file-create-form');
    Route::get('/customer-file-create-form', action: [RbFileController::class, 'customerCreateForm'])->name('customer-file-create-form');
    Route::post('/file/create', action: [RbFileController::class, 'create'])->name('file-create');
    Route::post('/file-update/{id}', [RbFileController::class, 'update'])->name('file-update');
    Route::delete('/file/{id}', action: [RbFileController::class, 'delete'])->name('file-delete');
    Route::get('/download/invoices/{filePath}', [RbFileController::class, 'downloadInvoice'])->name('file-download');
});
