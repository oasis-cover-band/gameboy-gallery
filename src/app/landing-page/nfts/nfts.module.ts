import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsComponent } from './nfts.component';
import { NftModule } from '../nft/nft.module';
import { IncludePipe } from './include.pipe';
import { LoadingPageModule } from 'src/app/loading-page/loading-page.module';



@NgModule({
  declarations: [
    NftsComponent,
    IncludePipe
  ],
  imports: [
    CommonModule,
    NftModule,
    LoadingPageModule
  ],
  exports: [
    NftsComponent
  ]
})
export class NftsModule { }
