import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsComponent } from './nfts.component';
import { NftModule } from '../nft/nft.module';
import { IncludePipe } from './include.pipe';



@NgModule({
  declarations: [
    NftsComponent,
    IncludePipe
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
