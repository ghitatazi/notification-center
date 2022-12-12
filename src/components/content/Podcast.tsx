import { DeezerPodcast } from "../../types/content";
import { Content } from "./Content";

export const Podcast = (content: DeezerPodcast): JSX.Element => {
  return (
    <Content
      content={content}
      author={content.author}
      durationTime={content.duration_time}
    />
  );
};
