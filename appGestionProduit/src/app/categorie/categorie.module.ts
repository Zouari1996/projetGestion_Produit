import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategorieModule { }
