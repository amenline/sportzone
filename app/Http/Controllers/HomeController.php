<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Displays the home page
     * 
     * @return view
     */
    public function index()
    {
        return view('home');
    }
}
