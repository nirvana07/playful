import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routingModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
