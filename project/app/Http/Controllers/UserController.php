<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreUserRequest ;
use Illuminate\Support\Facades\Hash ;
class UserController extends Controller
{
    public function addUser(StoreUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $token = $user->createToken('LaravelPassportToken')->accessToken;

        return response()->json($user, 201);
    }

    public function getUser($id)
    {
        $user = User::with('Profile' ,'roles')->find($id);

        if ($user) {
            return response()->json(['user' => $user], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function attachRole(Request $request , $id) {
        $request->validate([
            'role_id' => 'required|exists:roles,id'
        ]) ;

        $user = User::find($id) ;

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->roles()->attach($request->role_id);

        return response()->json(['message' => 'Role attached successfully']);
    }

    public function getUserRoles($id)
    {
        $user = User::with('roles')->find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user->roles);
    }

    public function showUserWithPosts($id)
    {
        $user = User::with('posts')->find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }
}
