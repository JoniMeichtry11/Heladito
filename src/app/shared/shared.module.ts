import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperDirective } from './directives/swiper.directive';
import { ButtonComponent } from './components/button/button.component';
import { CardExploreComponent } from './components/card-explore/card-explore.component';

@NgModule({
  declarations: [SwiperDirective, ButtonComponent, CardExploreComponent],
  imports: [CommonModule, RouterModule],
  exports: [SwiperDirective, ButtonComponent, CardExploreComponent],
})
export class SharedModule {}
