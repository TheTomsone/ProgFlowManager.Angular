import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareComponent } from './software/software.component';
import { TeamComponent } from './team/team.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: 'software', component: SoftwareComponent},
  {path: 'team', component: TeamComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
