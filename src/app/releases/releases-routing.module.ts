import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesComponent } from './releases.component';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';

const releaseRoutes: Routes = [
  {
    path: '',
    component: ReleasesComponent,
    children: [
      { path: ':id', component: ReleaseDetailComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(releaseRoutes) ],
  exports: [ RouterModule ]
})
export class ReleasesRoutingModule {}
