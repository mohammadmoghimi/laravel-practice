<?php

use App\Http\Middleware\CheckRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController ;
use App\Http\Controllers\TeacherController ;
use App\Http\Controllers\StudentController ;
use App\Http\Middleware;

// authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    
    // Teacher routes
    Route::get('/search-students', [TeacherController::class,'searchStudents']);
    Route::post('/send-teacher-request', [TeacherController::class,'sendTeacherRequest']);

    // Student routes
    Route::get('/teacher-requests', [StudentController::class,'getTeacherRequests']);
    Route::post('/respond-teacher-request', [StudentController::class,'respondToTeacherRequest']);

    // View routes
    Route::get('/student-view', function () {
        return response()->json(['message' => 'Student view']);
    })->middleware(CheckRole::class . ':student');

    Route::get('/teacher-view', function () {
        return response()->json(['message' => 'Teacher view']);
    })->middleware(CheckRole::class . ':teacher');
});

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');
