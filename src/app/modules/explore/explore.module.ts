import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { ListProyectsComponent } from './components/list-proyects/list-proyects.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ExplorePageComponent,
    CarouselComponent,
    SearchComponent,
    ListProyectsComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExploreModule { }
