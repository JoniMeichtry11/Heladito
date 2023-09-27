import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ProfileConfigurationComponent } from './pages/profile-configuration/profile-configuration.component';
import { SocialNetworkConfigurationComponent } from './pages/social-network-configuration/social-network-configuration.component';
import { PaymentConfigurationComponent } from './pages/payment-configuration/payment-configuration.component';
import { TextsConfigurationComponent } from './pages/texts-configuration/texts-configuration.component';
import { ButtonsConfigurationComponent } from './pages/buttons-configuration/buttons-configuration.component';
import { OthersConfigurationComponent } from './pages/others-configuration/others-configuration.component';


@NgModule({
  declarations: [
    ProfileConfigurationComponent,
    SocialNetworkConfigurationComponent,
    PaymentConfigurationComponent,
    TextsConfigurationComponent,
    ButtonsConfigurationComponent,
    OthersConfigurationComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
