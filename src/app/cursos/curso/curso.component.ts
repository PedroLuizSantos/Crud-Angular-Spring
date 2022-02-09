import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  cursos: Cursos[] = [
    { _id: '1', name:'Angular', category: 'Front-end'}
  ];
  displayedColumns = ['name','category'];

  constructor() {
    //this.cursos = [];
  }

  ngOnInit(): void {
  }

}
