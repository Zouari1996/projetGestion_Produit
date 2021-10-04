<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateProduitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produit', function ( $table) {
            $table->id();
            $table->string('nom');
            $table->string('designation');
            $table->string('code');
            $table->unsignedBigInteger('categorie_id');
            $table->foreign('categorie_id')  
                ->references('id')  
                ->on('categorie')  
                ->onDelete('cascade'); 
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produit');
        
    }
}
