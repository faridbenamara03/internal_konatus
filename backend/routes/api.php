<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RessourcesController;
use App\Http\Controllers\WorkElementController;
use App\Http\Controllers\ProgramBacklogController;
use App\Http\Controllers\ProductLineController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\TeamController;

use App\Http\Controllers\CompanyDataController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/menu/get_nav_data', [RessourcesController::class, 'nav_data']);
// Route::get('/menu/get_nav_data', [RessourcesController::class, 'nav_data_test']);
// Route::get('/menu/get_nav_data', [RessourcesController::class, 'nav_data_new']);
Route::get('/menu/get_nav_data', [CompanyDataController::class, 'nav_data']);

Route::get('/portfolio/demand', [WorkElementController::class, 'demand']);
Route::get('/portfolio/reporting', [WorkElementController::class, 'reporting']);
Route::get('/portfolio/control', [WorkElementController::class, 'control']);
Route::get('/program/demand', [ProgramBacklogController::class, 'demand']);
Route::get('/program/reporting', [ProgramBacklogController::class, 'reporting']);
Route::get('/program/control', [ProgramBacklogController::class, 'control']);
Route::get('/project/demand/team', [ProductLineController::class, 'demand_team']);
Route::get('/project/demand/phase', [ProductLineController::class, 'demand_phase']);
Route::get('/project/report', [ProductLineController::class, 'report']);
Route::get('/project/control', [ProductLineController::class, 'control']);
Route::get('/unit/demand', [UnitController::class, 'demand']);
Route::get('/unit/reporting', [UnitController::class, 'reporting']);
Route::get('/unit/control', [UnitController::class, 'control']);
Route::get('/team/demand', [TeamController::class, 'demand']);
Route::get('/team/reporting', [TeamController::class, 'reporting']);
Route::get('/team/control/table', [TeamController::class, 'control']);
Route::get('/team/control/chart', [TeamController::class, 'chart']);
