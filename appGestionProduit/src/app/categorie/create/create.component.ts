import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  form: FormGroup=new FormGroup({});

  
  constructor(
    public categorieService: CategorieService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nomCategorie:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+|[0-9]+') ]),
      description: new FormControl('', [ Validators.required ]),

    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categorieService.create(this.form.value).subscribe(res => {
         console.log('catégorie créée avec succès !');
         this.router.navigateByUrl('categorie/index');
    })
  }

}
