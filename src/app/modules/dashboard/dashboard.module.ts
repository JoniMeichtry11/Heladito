import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HeladitosPageComponent } from './pages/heladitos-page/heladitos-page.component';
import { SubscribersPageComponent } from './pages/subscribers-page/subscribers-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    HeladitosPageComponent,
    SubscribersPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
