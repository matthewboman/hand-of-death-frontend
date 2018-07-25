import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TourDate } from '../tour-date.model';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  tourDates: TourDate[];
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.tourService.getTourDates(params['id'])
          .subscribe(
            dates => this.tourDates = dates,
            error => this.errorMessage = <any>error
          );
      }
    );
  }

}
