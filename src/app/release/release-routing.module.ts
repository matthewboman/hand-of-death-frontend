import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseComponent } from './release.component';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';

const routes: Routes = [
  { path: '', component: ReleaseComponent, },
  { path: ':id', component: ReleaseDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ReleaseRoutingModule {}
