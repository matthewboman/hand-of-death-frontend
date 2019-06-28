import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TourDate, TouringArtist } from './tour';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit, OnDestroy {
  touringArtists: TouringArtist[];
  subscription: Subscription;

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.getTouringArtists();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTouringArtists(): void {
    this.subscription = this.tourService.getTouringArtists().subscribe(
      touringArtists => this.touringArtists = touringArtists,
      error => console.log(error)
    );
  }

}
