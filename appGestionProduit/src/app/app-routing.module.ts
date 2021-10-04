import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexProduitComponent } from './produit/index-produit/index-produit.component';
import { CreateProduitComponent } from './produit/create-produit/create-produit.component';
import { CreateComponent} from './categorie/create/create.component';
import { IndexComponent } from './categorie/index/index.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: '/indexCategorie' },
  { path: 'indexProduit' , component:IndexProduitComponent},
  { path: 'addProduit' , component:CreateProduitComponent},
  { path: 'addCategorie' , component:CreateComponent},
  { path: 'indexCategorie' , component:IndexComponent},


/*{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
