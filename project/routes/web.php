<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PostController ;
use App\Http\Controllers\NumberController ;
use App\Http\Controllers\AuthController;


Route::post('/user', [UserController::class, 'addUser']);
Route::get('/user/{id}', [UserController::class, 'getUser']);

Route::post('/profiles', [ProfileController::class, 'store']);
Route::get('/profiles/{id}', [ProfileController::class, 'show']);

Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);

Route::post('/user/{id}/roles', [UserController::class, 'attachRole']);

Route::get('/user/{id}/roles', [UserController::class, 'getUserRoles']);

Route::post('/posts' , [PostController::class , 'store']) ;

Route::get('/user/{id}/posts', [UserController::class, 'showUserWithPosts']);

Route::post('/convert', [NumberController::class, 'convert']) ;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});
