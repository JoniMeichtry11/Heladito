import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeladitoAnimationComponent } from './components/heladito-animation/heladito-animation.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeladitoAnimationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
