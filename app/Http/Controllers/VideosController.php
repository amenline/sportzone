<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VideosController extends Controller
{
    /**
     * Displays the videos page
     * 
     * @return view
     */
    public function index()
    {
        return view('videos');
    }
}
