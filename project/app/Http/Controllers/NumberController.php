<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NumberController extends Controller
{
    public function convert(Request $request)
    {
        $input = $request->all();

        return response()->json([
            'converted' => $input
        ]);
    }}
