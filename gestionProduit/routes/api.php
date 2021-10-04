<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategorieController;

use App\Http\Controllers\API\ProduitController;

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
Route::prefix('categorie')->group(function () {
    Route::get('/',[ CategorieController::class, 'getAll']);
    Route::post('/',[ CategorieController::class, 'create']);
    Route::delete('/{id}',[ CategorieController::class, 'delete']);
    Route::get('/{id}',[ CategorieController::class, 'get']);
    Route::put('/{id}',[ CategorieController::class, 'update']);
});
Route::prefix('produit')->group(function () {
    Route::get('/',[ ProduitController::class, 'getAll']);
    Route::post('/',[ ProduitController::class, 'create']);
    Route::delete('/{id}',[ ProduitController::class, 'delete']);
    Route::get('/{id}',[ ProduitController::class, 'get']);
    Route::put('/{id}',[ ProduitController::class, 'update']);
});
