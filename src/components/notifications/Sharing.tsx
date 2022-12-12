import React from "react";
import "../../styles/Sharing.css";
import { DeezerSharing } from "../../types/notification";
import { getDateMonthFromDateString } from "../../utils/date";
import { Content } from "../content/Content";
import { LinkToContent } from "../content/LinkToContent";

const Sharing = ({
  content: contentLink,
  validity_period: { createdAt },
  description: { sender, message, content },
}: DeezerSharing): JSX.Element => {
  return (
    <>
      <div className="createdAt">{getDateMonthFromDateString(createdAt)}</div>
      <p>{`*${sender}* has shared something with you`}</p>
      <p className="sharing-message">{`"${message}"`}</p>
      <LinkToContent link={contentLink}>
        <Content {...content} />
      </LinkToContent>
    </>
  );
};

export default React.memo(Sharing);
