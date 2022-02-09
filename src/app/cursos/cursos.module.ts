import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursoComponent } from './curso/curso.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,

  ]
})
export class CursosModule { }
