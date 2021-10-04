import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Produit } from '../produit';
import { Categorie } from 'src/app/categorie/categorie';

import { CategorieService } from 'src/app/categorie/categorie.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  id !: number;
  produit !: Produit;
  form !: FormGroup;
  categories: Categorie[] = [];

  constructor(
    public produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    public CategorieService: CategorieService

  ) { }

  ngOnInit(): void {

    this.CategorieService.getAll().subscribe((data: Categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })
    this.id = this.route.snapshot.params['idProduit'];
    this.produitService.find(this.id).subscribe((data: Produit)=>{
      this.produit = data;
    });

    this.form = new FormGroup({
      nom:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      designation: new FormControl('', [ Validators.required]),
      code: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      categorie_id : new FormControl(  )

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.produitService.update(this.id, this.form.value).subscribe(res => {
         console.log('Produit modifié avec succès !');
         this.router.navigateByUrl('produit/index');
    })
  }

}

