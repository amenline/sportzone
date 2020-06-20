<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FixturesController extends Controller
{
    /**
     * Displays the fixtures page
     * 
     * @return view
     */
    public function index()
    {
        return view('fixtures');
    }
}
