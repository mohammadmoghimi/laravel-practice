<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreRoleRequest ;
use App\Models\Role;

class RoleController extends Controller
{
    public function store(StoreRoleRequest $request)
    {
        $role = Role::create([
            'name' => $request->name,
        ]);

        return response()->json($role, 201);
    }

    public function show($id)
    {
        $role = Role::with('users')->find($id);

        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        return response()->json($role);
    }
}
