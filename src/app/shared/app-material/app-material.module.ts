import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports:[
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,

  ],
})
export class AppMaterialModule { }
