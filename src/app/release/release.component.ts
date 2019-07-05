import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Release } from './release';
import { ReleaseService } from './release.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit, OnDestroy {
  releases: Release[];
  subscription: Subscription;
  errorMessage: string;

  constructor(private releaseService: ReleaseService) { }

  ngOnInit(): void {
    this.getReleases();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getReleases(): void {
    this.subscription = this.releaseService.getReleases().subscribe(
      releases => this.releases = releases,
      error => {
        // console.log(error);
        this.errorMessage = "Unable to display releases at this time";
      }
    );
  }

}
