export class TourDate {
  public eventName: string;
  public eventDate: any;
  public eventCity: string;
  public eventLink: string;

  constructor(
    eventName: string,
    eventDate: any,
    eventCity: string,
    eventLink: string
  ) {
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.eventCity = eventCity;
    this.eventLink = eventLink;
  }
}

export class TouringArtist {
  public artistName: string;
  public artistId: string;

  constructor(artistName: string, artistId: string) {
    this.artistName = artistName;
    this.artistId = artistId;
  }
}
