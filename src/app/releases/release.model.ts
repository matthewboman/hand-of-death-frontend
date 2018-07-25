export class Release {
  public id: string;
  public title: string;
  public releaseNumber: string;
  public artist: string;
  public linkStore: string;
  public linkSite: string;
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
    linkStore: string,
    linkSite: string,
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
    this.linkStore = linkStore;
    this.linkSite = linkSite;
    this.description = description;
    this.albumArtLarge = albumArtLarge;
    this.albumArtSmall = albumArtSmall;
    this.spotify = spotify;
    this.soundcloud = soundcloud;
  }

}
