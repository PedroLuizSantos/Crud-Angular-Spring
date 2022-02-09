import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CursoComponent } from './curso/curso.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
