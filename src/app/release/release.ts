export class Release {
  public id: string;
  public title: string;
  public releaseNumber: string;
  public artist: string;
  public linkToStore: string;
  public linkToSite: string;
  public description: string;
  public albumArtLarge: string;
  public albumArtSmall: string;
  public spotify: string;
  public soundcloud: string;

  constructor(
    id: string,
    title: string,
    releaseNumber: string,
    artist: string,
    linkToStore: string,
    linkToSite: string,
    description: string,
    albumArtLarge: string,
    albumArtSmall: string,
    spotify: string,
    soundcloud: string,
  ) {
    this.id = id;
    this.title = title;
    this.releaseNumber = releaseNumber;
    this.artist = artist;
    this.linkToStore = linkToStore;
    this.linkToSite = linkToSite;
    this.description = description;
    this.albumArtLarge = albumArtLarge;
    this.albumArtSmall = albumArtSmall;
    this.spotify = spotify;
    this.soundcloud = soundcloud;
  }

}
