import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { NftsModule } from './nfts/nfts.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    NftsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
