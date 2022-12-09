import React from "react";
import { DeezerUpdate } from "../types/notification";
import { getDateMonthFromDateString } from "../utils/date";

const Update = ({
  validity_period: { createdAt },
  description: { text },
}: DeezerUpdate): JSX.Element => {
  return (
    <>
      <div className="createdAt">{getDateMonthFromDateString(createdAt)}</div>
      <p>{text}</p>
    </>
  );
};

export default React.memo(Update);
