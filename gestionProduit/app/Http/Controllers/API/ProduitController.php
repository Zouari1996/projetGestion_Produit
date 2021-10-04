<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categorie;
use App\Models\Produit;
use Illuminate\Support\Facades\DB;

Use Log;




class ProduitController extends Controller
{
    public function getAll(){
       $data= DB::table('produit')
       ->join('categorie', 'produit.categorie_id', '=', 'categorie.id')
       ->select('produit.*','categorie.nomCategorie')
        ->get();

     //$data = Produit::get();



        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nom'] = $request['nom'];
        $data['designation'] = $request['designation'];
        $data['code'] = $request['code'];   
        $data['categorie_id'] = $request['categorie_id'];
        Produit::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Produit::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Produit::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nom'] = $request['nom'];
        $data['designation'] = $request['designation'];
        $data['code'] = $request['code'];   
        $data['categorie_id'] = $request['categorie_id'];
        Produit::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
  }