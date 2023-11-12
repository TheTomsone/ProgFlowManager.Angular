import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { FeaturesComponent } from './features/features.component';
import { QuartersComponent } from './quarters/quarters.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    QuartersComponent
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule
  ]
})
export class RoadmapModule { }
