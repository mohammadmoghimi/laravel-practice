<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

Route::middleware('auth:api')->group(function () {

//student routes
Route::post('/student/register', [StudentController::class, 'register']);
Route::post('/student/login', [StudentController::class, 'login']);

});

//teacher routes
Route::post('/teacher/register', [TeacherController::class, 'register']);
Route::post('/teacher/login', [TeacherController::class, 'login']);

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});




