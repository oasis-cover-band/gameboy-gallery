import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { LoadingPageModule } from './loading-page/loading-page.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';

const routes: Routes = [
  {
    path: '', component: LoadingPageComponent
  },
  {
    path: 'home', component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoadingPageModule,
    LandingPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
