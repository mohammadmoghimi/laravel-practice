<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreProfileRequest ;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function store(StoreProfileRequest $request)
    {
        $profile = Profile::create([
            'user_id' => $request->user_id,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);

        return response()->json($profile, 201);
    }

    public function show($id)
    {
        $profile = Profile::with('user')->find($id);

        if (!$profile) {
            return response()->json(['message' => 'Profile not found'], 404);
        }

        return response()->json($profile);
    }
}
