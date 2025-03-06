<?php
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {
    Route::get('/user-all', [UserController::class, 'index'])->name('user-all');
    Route::get('/create-user', [UserController::class, 'createUserForm'])->name('create-user');
    Route::get('/user/view/{id}', [UserController::class, 'view'])->name('view-user');
    Route::put('/user/update/{id}', [UserController::class, 'update'])->name('user-update');
    Route::get('/user-update-form/{id}', [UserController::class, 'getUpdateForm'])->name('user-update-form');
    Route::post('/user-store', [UserController::class, 'create'])->name('user-store');
    Route::delete('/user-delete/{id}', [UserController::class, 'delete'])->name('user-delete');
    Route::get('/user-search', [UserController::class, 'searchUser'])->name('user-search'); //just for a search returning json data
});
