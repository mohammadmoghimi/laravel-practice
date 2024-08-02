<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TeacherRequest;

class StudentController extends Controller
{
    public function getTeacherRequests()
    {
        $student = auth()->user(); 
    
        $requests = TeacherRequest::with('teacher')
            ->where('student_id', $student->id)
            ->get();
    
        return response()->json(['requests' => $requests], 200);
    }

    public function respondToTeacherRequest(Request $request)
{
    $user = auth()->user();
    $requestId = $request->input('requestId');
    $status = $request->input('status');

    $teacherRequest = TeacherRequest::find($requestId);

    if (!$teacherRequest) {
        return response()->json(['message' => 'Request not found'], 404);
    }

    if ($teacherRequest->student_id !== $user->id) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    // Update the request status
    $teacherRequest->status = $status;
    $teacherRequest->save();

    return response()->json(['message' => 'Request updated successfully']);
}
}
