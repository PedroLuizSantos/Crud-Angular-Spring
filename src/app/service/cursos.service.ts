import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Cursos } from '../cursos/models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = '/assets/cursos.json';

  constructor(
    private HttpClient:HttpClient
    ) { }

  obterLista() {
   return this.HttpClient.get<Cursos[]>(this.API).pipe(
    first(),
    delay(1500),
    tap(cursos => console.log(cursos))
   );
  }

}
