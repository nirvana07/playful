import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    routingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    SideNavComponent,
    AuthComponent,
    RegistrationComponent
  ],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
