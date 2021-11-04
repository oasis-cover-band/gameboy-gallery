import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNftPageComponent } from './single-nft-page.component';
import { NftModule } from '../nft/nft.module';



@NgModule({
  declarations: [
    SingleNftPageComponent
  ],
  imports: [
    CommonModule,
    NftModule
  ],
  exports: [
    SingleNftPageComponent
  ]
})
export class SingleNftPageModule { }
