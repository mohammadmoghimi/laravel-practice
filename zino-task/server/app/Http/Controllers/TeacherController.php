<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\TeacherRequest;

class TeacherController extends Controller
{
    public function searchStudents(Request $request)
    {
        $query = $request->input('query');
    
        // Search for users with the 'student' role
        $students = User::whereHas('roles', function ($query) {
            $query->where('name', 'student');
        })->where('name', 'like', '%' . $query . '%')->get();
    
        return response()->json(['students' => $students], 200);
    }

    public function sendTeacherRequest(Request $request)
{
    $teacher = auth()->user();  // Assuming the user is authenticated
    $studentId = $request->input('student_id');

    // Check if the teacher is trying to send a request to themselves
    if ($teacher->id == $studentId) {
        return response()->json(['message' => 'You cannot send a request to yourself'], 400);
    }

    // Create a new teacher request
    TeacherRequest::create([
        'teacher_id' => $teacher->id,
        'student_id' => $studentId,
    ]);

    return response()->json(['message' => 'Request sent successfully'], 201);
}
}
