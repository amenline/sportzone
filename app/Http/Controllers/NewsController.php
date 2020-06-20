<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Displays the news page
     * 
     * @return view
     */
    public function index()
    {
        return view('news');
    }
}
