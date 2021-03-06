import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'categorie', redirectTo: 'categorie/index', pathMatch: 'full'},
  { path: 'categorie/index', component: IndexComponent },
  { path: 'categorie/create', component: CreateComponent },
  { path: 'categorie/edit/:idCategorie', component: EditComponent } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
