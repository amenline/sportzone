<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LeaguesController extends Controller
{
    /**
     * Displays the leagues page
     * 
     * @return view
     */
    public function index()
    {
        return view('leagues');
    }
}
