import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseComponent } from './release.component';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';
import { ReleasePreviewComponent } from './release-preview/release-preview.component';
import { ReleaseRoutingModule } from './release-routing.module';
import { ReleaseService } from './release.service';

import { PipesModule } from '../shared/pipes.module';

@NgModule({
  declarations: [
    ReleaseComponent,
    ReleaseDetailComponent,
    ReleasePreviewComponent
  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule,
    PipesModule
  ],
  providers: [
    ReleaseService
  ]
})
export class ReleaseModule { }
