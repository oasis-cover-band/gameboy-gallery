import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsComponent } from './nfts.component';
import { NftModule } from '../nft/nft.module';



@NgModule({
  declarations: [
    NftsComponent
  ],
  imports: [
    CommonModule,
    NftModule
  ],
  exports: [
    NftsComponent
  ]
})
export class NftsModule { }
