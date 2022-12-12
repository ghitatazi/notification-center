import { ContentType, CONTENT_TYPE } from "../../types/content";
import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { Podcast } from "./Podcast";
import { Track } from "./Track";

export const ContentContainer = (content: ContentType) => {
  switch (content.type) {
    case CONTENT_TYPE.ALBUM:
      return <Album {...content} />;

    case CONTENT_TYPE.PLAYLIST:
      return <Playlist {...content} />;

    case CONTENT_TYPE.TRACK:
      return <Track {...content} />;

    case CONTENT_TYPE.PODCAST:
      return <Podcast {...content} />;

    default:
      return <></>;
  }
};
