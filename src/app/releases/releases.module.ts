import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesComponent } from './releases.component';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';
import { ReleasePreviewComponent } from './release-preview/release-preview.component';
import { ReleasesRoutingModule } from './releases-routing.module'
import { ReleaseService } from './release.service';

import { PipesModule } from '../shared/pipes.module';

@NgModule({
  declarations: [
    ReleasesComponent,
    ReleaseDetailComponent,
    ReleasePreviewComponent,
  ],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
    PipesModule,
  ],
  providers: [
    ReleaseService
  ]
})
export class ReleasesModule { }
