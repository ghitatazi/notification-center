import { ARTISTS, AUTHOR, DURATION_TIME } from "../constants/contentKeys";

export const enum CONTENT_TYPE {
  ALBUM = "album",
  PLAYLIST = "playlist",
  TRACK = "track",
  PODCAST = "podcast",
}

export type Artists = string[];
export type Author = string;
export type DurationTime = string;

type BasicContent = {
  coverImg?: string;
  title: string;
};

// adding Deezer as a prefix to all types of contents to avoid confusion with the associated React components
export type DeezerAlbum = BasicContent & {
  type: CONTENT_TYPE.ALBUM;
  [ARTISTS]: Artists;
};

export type DeezerPlaylist = BasicContent & {
  type: CONTENT_TYPE.PLAYLIST;
  [AUTHOR]: Author;
};

export type DeezerTrack = BasicContent & {
  type: CONTENT_TYPE.TRACK;
  [ARTISTS]: Artists;
  [DURATION_TIME]: DurationTime;
};

export type DeezerPodcast = BasicContent & {
  type: CONTENT_TYPE.PODCAST;
  [AUTHOR]: Author;
  [DURATION_TIME]: DurationTime;
};

// add a type here if a new type of content is added
export type ContentType =
  | DeezerAlbum
  | DeezerPlaylist
  | DeezerTrack
  | DeezerPodcast;
