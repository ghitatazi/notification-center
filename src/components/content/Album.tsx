import { DeezerAlbum } from "../../types/content";
import { Content } from "./Content";

export const Album = (content: DeezerAlbum): JSX.Element => {
  return <Content content={content} artists={content.artists} />;
};
