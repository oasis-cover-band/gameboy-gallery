import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsSVGPipe } from './is-svg.pipe';



@NgModule({
  declarations: [
    IsSVGPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsSVGPipe
  ]
})
export class PipesModule { }
