import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftComponent } from './nft.component';
import { NftImagesModule } from './nft-images/nft-images.module';
import { NftMetadataModule } from './nft-metadata/nft-metadata.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NftComponent
  ],
  imports: [
    CommonModule,
    NftImagesModule,
    NftMetadataModule,
    RouterModule
  ],
  exports: [
    NftComponent
  ]
})
export class NftModule { }
