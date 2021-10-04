import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexProduitComponent } from './index-produit/index-produit.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  { path: 'produit', redirectTo: 'produit/index', pathMatch: 'full'},
  { path: 'produit/index', component: IndexProduitComponent },
  { path: 'produit/create', component: CreateProduitComponent },
  { path: 'produit/edit/:idProduit', component: EditProduitComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
