import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionStatisticsPageComponent } from './collection-statistics-page.component';
import { ToNumberPipe } from './to-number.pipe';



@NgModule({
  declarations: [
    CollectionStatisticsPageComponent,
    ToNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CollectionStatisticsPageModule { }
