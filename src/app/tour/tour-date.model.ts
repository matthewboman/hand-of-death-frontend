export class TourDate {
  public eventName: string;
  public eventDate: Object;
  public eventCity: string;
  public eventLink: string;

  constructor(
    eventName: string,
    eventDate: Object,
    eventCity: string,
    eventLink: string
  ) {
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.eventCity = eventCity;
    this.eventLink = eventLink;
  }
}
