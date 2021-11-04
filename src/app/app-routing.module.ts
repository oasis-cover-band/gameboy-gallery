import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftsComponent } from './landing-page/nfts/nfts.component';
import { NftsModule } from './landing-page/nfts/nfts.module';
import { NftComponent } from './landing-page/nft/nft.component';
import { NftModule } from './landing-page/nft/nft.module';
import { CollectionStatisticsPageComponent } from './landing-page/collection-statistics-page/collection-statistics-page.component';
import { CollectionStatisticsPageModule } from './landing-page/collection-statistics-page/collection-statistics-page.module';

const routes: Routes = [
  {
    path: '', component: NftsComponent
  },
  {
    path: 'home', component: NftsComponent
  },
  {
    path: 'view-nft/:collectionIndex/:collectionItemIndex', component: NftComponent
  },
  {
    path: 'stats', component: CollectionStatisticsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NftsModule,
    NftModule,
    CollectionStatisticsPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
