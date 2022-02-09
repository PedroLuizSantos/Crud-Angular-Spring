import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/service/cursos.service';

import { Cursos } from '../models/cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  cursos$: Observable<Cursos[]>;
  displayedColumns = ['name','category'];

  // CursoService:CursoService;

  constructor(
    private cursoService:CursoService,
  ) {
    this.cursos$ = this.cursoService.obterLista();
    // this.CursoService = new CursoService();
    //this.cursos = [];
  }

  ngOnInit(): void {

  }

}
