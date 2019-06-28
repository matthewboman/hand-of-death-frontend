import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Release } from '../release';
import { ReleaseService } from '../release.service';
import { IframePipe } from '../../shared/iframe.pipe';

@Component({
  selector: 'app-release-detail',
  templateUrl: './release-detail.component.html',
  styleUrls: ['./release-detail.component.scss']
})
export class ReleaseDetailComponent implements OnInit {
  release: Release;
  id: string;

  constructor(
    private releaseService: ReleaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRelease();
  }

  getRelease(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.releaseService.getRelease(params.id)
          .subscribe(
            release => this.release = release,
            error => console.log(error)
          );
      }
    );
  }

}
