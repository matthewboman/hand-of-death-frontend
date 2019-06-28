export class About {
  public title: string;
  public body: string;
  public imageUrl: string;
  public distributors: string[];

  constructor(
    title: string,
    body: string,
    imageUrl: string,
    distributors: string[]
  ) {
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.distributors = distributors;
  }
}
