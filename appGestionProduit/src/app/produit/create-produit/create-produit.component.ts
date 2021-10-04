import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/categorie/categorie';
import { CategorieService } from 'src/app/categorie/categorie.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {

 
  form !: FormGroup;
  categories: Categorie[] = [];

  constructor(
    public produitService: ProduitService,
    private router: Router,
    public CategorieService: CategorieService
  ) { }


 

 

  

  ngOnInit(): void {
    this.CategorieService.getAll().subscribe((data: Categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })
    this.form = new FormGroup({
      nom:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      designation: new FormControl('', [ Validators.required ]),
      code: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      categorie_id : new FormControl(  )
      });

  }

  get f(){
    return this.form.controls;
 
  }

  submit(){
    console.log(this.form.value);
    this.produitService.create(this.form.value).subscribe(res => {
         console.log('Produit créé avec succès !');
         this.router.navigateByUrl('/produit/index');
    })
  }

} 