import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';

import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { IndexProduitComponent } from './index-produit/index-produit.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  
    EditProduitComponent,
    CreateProduitComponent,
    IndexProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProduitModule { }
