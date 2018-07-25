import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { TouringArtist } from './touring-artist.model';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit, OnDestroy {
  touringArtists: TouringArtist[]
  errorMessage: string;
  subscription: Subscription;

  constructor(private tourService: TourService) { }

  getTouringBands(): void {
    this.subscription = this.tourService.getTouringBands().subscribe(
      touringArtists => this.touringArtists = touringArtists,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit(): void {
    this.getTouringBands();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
