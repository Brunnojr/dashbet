import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BalanceInfoComponent } from '../balance-info/balance-info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BalanceInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
