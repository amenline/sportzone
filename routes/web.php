<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');
Route::get('/news', 'NewsController@index')->name('news');
Route::get('/teams', 'TeamsController@index')->name('teams');
Route::get('/leagues', 'LeaguesController@index')->name('leagues');
Route::get('/fixtures', 'FixturesController@index')->name('fixtures');
Route::get('/videos', 'VideosController@index')->name('videos');
