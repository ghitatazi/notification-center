import { ARTISTS, AUTHOR, DURATION_TIME } from "../constants/contentKeys";

export const enum CONTENT_TYPE {
  ALBUM = "album",
  PLAYLIST = "playlist",
  TRACK = "track",
  PODCAST = "podcast",
}

type BasicContent = {
  coverImg?: string;
  title: string;
};

type Album = BasicContent & {
  type: CONTENT_TYPE.ALBUM;
  [ARTISTS]: string[];
};

type Playlist = BasicContent & {
  type: CONTENT_TYPE.PLAYLIST;
  [AUTHOR]: string;
};

type Track = BasicContent & {
  type: CONTENT_TYPE.TRACK;
  [ARTISTS]: string[];
  [DURATION_TIME]: string;
};

type Podcast = BasicContent & {
  type: CONTENT_TYPE.PODCAST;
  [AUTHOR]: string;
  [DURATION_TIME]: string;
};

// add a type here if a new type of content is added
export type ContentType = Album | Playlist | Track | Podcast;

type HasArtists<T> = typeof ARTISTS extends keyof T ? T : never;
type HasAuthor<T> = typeof AUTHOR extends keyof T ? T : never;
type HasDurationTime<T> = typeof DURATION_TIME extends keyof T ? T : never;

// add a type here if a new type of content is added
export type HasContentArtists =
  | HasArtists<Album>
  | HasArtists<Playlist>
  | HasArtists<Track>
  | HasArtists<Podcast>;

// add a type here if a new type of content is added
export type HasContentAuthor =
  | HasAuthor<Album>
  | HasAuthor<Playlist>
  | HasAuthor<Track>
  | HasAuthor<Podcast>;

// add a type here if a new type of content is added
export type HasContentDurationTime =
  | HasDurationTime<Album>
  | HasDurationTime<Playlist>
  | HasDurationTime<Track>
  | HasDurationTime<Podcast>;
