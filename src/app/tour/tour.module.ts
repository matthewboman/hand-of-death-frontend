import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourComponent } from './tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourPreviewComponent } from './tour-preview/tour-preview.component';
import { TourRoutingModule } from './tour-routing.module';
import { TourService } from './tour.service';

@NgModule({
  declarations: [
    TourComponent,
    TourDetailComponent,
    TourPreviewComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule
  ],
  providers: [
    TourService
  ]
})
export class TourModule { }
