import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SoftwareComponent } from './software/software.component';
import { TeamComponent } from './team/team.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    SoftwareComponent,
    TeamComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
