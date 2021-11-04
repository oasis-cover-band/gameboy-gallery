import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftMetadataComponent } from './nft-metadata.component';



@NgModule({
  declarations: [
    NftMetadataComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NftMetadataComponent
  ]
})
export class NftMetadataModule { }
