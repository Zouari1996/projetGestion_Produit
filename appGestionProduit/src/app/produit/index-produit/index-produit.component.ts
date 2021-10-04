import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

import { Produit } from '../produit';
@Component({
  selector: 'app-index-produit',
  templateUrl: './index-produit.component.html',
  styleUrls: ['./index-produit.component.css']
})
export class IndexProduitComponent implements OnInit {
  produits: any[] = [];

  constructor(public produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe((data: any[])=>{
      this.produits = data;

  
      console.log(this.produits);
    })
  }

  deletePerson(id:number){
    this.produitService.delete(id).subscribe(res => {
         this.produits = this.produits.filter(item => item.id !== id);
         console.log('Priduit supprimée avec succès !');
    })
  }

}
