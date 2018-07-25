import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Release } from './release.model';
import { ReleaseService } from './release.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit, OnDestroy {
  releases: Release[];
  errorMessage: string;
  subscription: Subscription;

  constructor(private releaseService: ReleaseService) { }

  getReleases(): void {
    this.subscription = this.releaseService.getReleases().subscribe(
      releases => {
        this.releases = releases
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }

  ngOnInit(): void {
    this.getReleases();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
