import { DeezerPlaylist } from "../../types/content";
import { Content } from "./Content";

export const Playlist = (content: DeezerPlaylist): JSX.Element => {
  return <Content content={content} author={content.author} />;
};
