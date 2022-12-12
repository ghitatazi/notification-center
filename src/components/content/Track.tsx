import { DeezerTrack } from "../../types/content";
import { Content } from "./Content";

export const Track = (content: DeezerTrack): JSX.Element => {
  return (
    <Content
      content={content}
      artists={content.artists}
      durationTime={content.duration_time}
    />
  );
};
