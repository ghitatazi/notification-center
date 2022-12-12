import placeholderImg from "../../assets/listen.jpg";
import { ARTISTS, AUTHOR, DURATION_TIME } from "../../constants/contentKeys";
import { CONTENT_TYPE_WORDINGS } from "../../constants/contentTypeWordings";
import "../../styles/Content.css";
import {
  ContentType,
  HasContentArtists,
  HasContentAuthor,
  HasContentDurationTime,
} from "../../types/content";

export const Content = (content: ContentType): JSX.Element => {
  const hasAuthor = AUTHOR in content;
  const hasArtists = ARTISTS in content;
  const hasDurationTime = DURATION_TIME in content;

  return (
    <div className="content">
      <div className="content-title">{content.title}</div>
      {hasAuthor && (
        <div className="content-artists">
          {(content as HasContentAuthor).author}
        </div>
      )}
      {hasArtists && (
        <div className="content-artists">
          {(content as HasContentArtists).artists.join(", ")}
        </div>
      )}
      <div className="content-coverImg-container">
        <img
          className="content-coverImg"
          src={content.coverImg || placeholderImg}
          alt="Content cover image"
        ></img>
      </div>
      <div className="content-details">
        {CONTENT_TYPE_WORDINGS[content.type]}
        {hasDurationTime &&
          ` • ${(content as HasContentDurationTime).duration_time}`}
      </div>
    </div>
  );
};
