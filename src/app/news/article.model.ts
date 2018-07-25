export class Article {
  public id: string;
  public title: string;
  public body: string;
  public imageUrl: string;
  public date: string;

  constructor(id: string, title: string, body: string, imageUrl: string, date: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
    this.date = date;
  }

}
