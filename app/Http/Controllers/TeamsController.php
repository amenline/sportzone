<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamsController extends Controller
{
    /**
     * Displays the teams page
     * 
     * @return view
     */
    public function index()
    {
        return view('teams');
    }
}
