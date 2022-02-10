import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { CursoService } from 'src/app/service/cursos.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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
    public dialog: MatDialog
  ) {
    this.cursos$ = this.cursoService.obterLista()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
    // this.CursoService = new CursoService();
    //this.cursos = [];
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
