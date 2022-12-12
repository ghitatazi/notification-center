import placeholderImg from "../../assets/listen.jpg";
import { CONTENT_TYPE_WORDINGS } from "../../constants/contentTypeWordings";
import "../../styles/Content.css";
import {
  Artists,
  Author,
  ContentType,
  DurationTime,
} from "../../types/content";

export const Content = ({
  content,
  author,
  artists,
  durationTime,
}: {
  content: ContentType;
  author?: Author;
  artists?: Artists;
  durationTime?: DurationTime;
}): JSX.Element => (
  <div className="content">
    <div className="content-title">{content.title}</div>
    {author && <div className="content-artists">{author}</div>}
    {artists && <div className="content-artists">{artists.join(", ")}</div>}
    <div className="content-coverImg-container">
      <img
        className="content-coverImg"
        src={content.coverImg || placeholderImg}
        alt="Content cover image"
      ></img>
    </div>
    <div className="content-details">
      {CONTENT_TYPE_WORDINGS[content.type]}
      {durationTime && ` • ${durationTime}`}
    </div>
  </div>
);
