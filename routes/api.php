<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ObservationController;
use App\Http\Controllers\ReclamationController;
use App\Http\Controllers\SuggestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum,admin'])->get('/user', function (Request $request) {
    
    return $request->user();
});
Route::get('/CountClient',[ClientController::class,'CountNombre']);
Route::get('/CountReclamation',[ReclamationController::class,'CountReclamation']);
Route::get('/CountReclamationEncours',[ReclamationController::class,'CountReclamationEncours']);
Route::get('/CountReclamationTraité',[ReclamationController::class,'CountReclamationTraitée']);
Route::get('/ClientReclamation/{id}',[ReclamationController::class,'ClientReclamation']);
Route::apiResources([
    'reclamations'=>ReclamationController::class,
    'clients'=>ClientController::class,
    'suggetions'=>SuggestionController::class,
    'observations'=>ObservationController::class,
    'notifications'=>NotificationController::class
]
    );
    Route::get('/UserReclamation/{id}',[ReclamationController::class,'UserR']);
    Route::get('/UserSuggestion/{id}',[SuggestionController::class,'UserS']);
    Route::get('/UserObservation/{id}',[ObservationController::class,'UserO']);
    Route::get('/ReclamationHome/{filter}',[ReclamationController::class,'Filter']);