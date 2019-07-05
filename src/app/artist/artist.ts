export class Artist {
  public id: string;
  public name: string;
  public bio: string;
  public link: string;
  public images: string[];
  public spotify: string;
  public soundcloud: string;

  constructor(
    id: string,
    name: string,
    bio: string,
    link: string,
    images: string[],
    spotify: string,
    soundcloud: string,
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.link = link;
    this.images = images;
    this.spotify = spotify;
    this.soundcloud = soundcloud;
  }
}
