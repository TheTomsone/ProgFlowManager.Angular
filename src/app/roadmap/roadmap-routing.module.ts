import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { QuartersComponent } from './quarters/quarters.component';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent},
  {path: 'quarters', component: QuartersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadmapRoutingModule { }
