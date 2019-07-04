import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TourDate } from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {
  tourDates: TourDate[];
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) { }

  ngOnInit(): void {
    this.getTourDates();
  }

  getTourDates(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.tourService.getTourDates(params.id)
          .subscribe(
            dates => this.tourDates = dates,
            error => {
              // console.log(error);
              this.errorMessage = 'Unable to load tour information at this time';
            }
          );
      }
    );
  }

}
