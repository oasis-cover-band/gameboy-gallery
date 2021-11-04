import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftImagesComponent } from './nft-images.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    NftImagesComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    NftImagesComponent
  ]
})
export class NftImagesModule { }
