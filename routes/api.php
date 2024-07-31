<?php

use Illuminate\Support\Facades\Route;

Route::prefix('cliente')->controller(App\Http\Controllers\ClientController::class)->group(function () {
    Route::get('/', 'getClientes');
});

Route::prefix('cuenta')->controller(App\Http\Controllers\AccountController::class)->group(function () {
    Route::get('/','getAccounts');
    Route::post('/','createNewAccount');
});

Route::prefix('transaccion')->controller(App\Http\Controllers\TransactionController::class)->group(function () {
    Route::post('/','saveNewTransaction');
});
