<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/user', [UserController::class, 'addUser']);

Route::get('/user/{id}', [UserController::class, 'getUser']);

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
