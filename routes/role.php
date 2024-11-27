<?php
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('roles', function () {
    return Inertia::render('Roles/Roles');
})->middleware(['auth', 'verified'])->name('roles');


Route::middleware('auth')->group(function () {
    Route::get('/role-all', [RoleController::class, 'index'])->name('role-all');
    Route::get('/role/{id}', [RoleController::class, 'view'])->name('role.view');
    Route::post('/role/create', action: [RoleController::class, 'create'])->name('role.create');
    Route::patch('/role/{id}', [RoleController::class, 'update'])->name('role.update');
    Route::delete('/role/{id}', action: [RoleController::class, 'delete'])->name('role.delete');
});
