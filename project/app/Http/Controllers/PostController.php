<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post ;
use App\Http\Requests\StorePostRequest ;

class PostController extends Controller
{
    public function store(StorePostRequest $request)
    {
        $post = Post::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'body' => $request->body,
        ]);
        
        return response()->json($post, 201);
    }
}
