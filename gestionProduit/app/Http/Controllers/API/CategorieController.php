<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categorie;
Use Log;

class CategorieController extends Controller
{
    public function getAll(){
        $data = Categorie::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nomCategorie'] = $request['nomCategorie'];
        $data['description'] = $request['description'];
        Categorie::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Categorie::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Categorie::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nomCategorie'] = $request['nomCategorie'];
        $data['description'] = $request['description'];
        Categorie::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
  }