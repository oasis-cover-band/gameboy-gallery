import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftMetadataComponent } from './nft-metadata.component';
import { ToNumberPipe } from './to-number.pipe';



@NgModule({
  declarations: [
    NftMetadataComponent,
    ToNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NftMetadataComponent
  ]
})
export class NftMetadataModule { }
