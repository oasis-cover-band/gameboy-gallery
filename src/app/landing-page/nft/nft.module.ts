import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftComponent } from './nft.component';
import { NftImagesModule } from './nft-images/nft-images.module';
import { NftMetadataModule } from './nft-metadata/nft-metadata.module';



@NgModule({
  declarations: [
    NftComponent
  ],
  imports: [
    CommonModule,
    NftImagesModule,
    NftMetadataModule
  ],
  exports: [
    NftComponent
  ]
})
export class NftModule { }
