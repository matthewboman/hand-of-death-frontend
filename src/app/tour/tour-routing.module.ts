import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourComponent } from './tour.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TourComponent,
    children: [
      { path: ':id', component: TourDetailComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TourRoutingModule {}
