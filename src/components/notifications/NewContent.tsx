import React from "react";
import { DeezerNewContent } from "../../types/notification";
import { getDateMonthFromDateString } from "../../utils/date";
import { ContentContainer } from "../content/Content.container";
import { LinkToContent } from "../content/LinkToContent";

const NewContent = ({
  validity_period: { createdAt },
  content: contentLink,
  description: { content },
}: DeezerNewContent): JSX.Element => {
  return (
    <>
      <div className="createdAt">{getDateMonthFromDateString(createdAt)}</div>
      <LinkToContent link={contentLink}>
        <ContentContainer {...content} />
      </LinkToContent>
    </>
  );
};

export default React.memo(NewContent);
