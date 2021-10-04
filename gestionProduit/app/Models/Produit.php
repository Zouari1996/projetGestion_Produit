<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    
    protected $table = "produit";

    protected $fillable = [
      'nom',
      'designation',
      'code',
      'categorie_id',
      
    ];
}
