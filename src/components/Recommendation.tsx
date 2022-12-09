import React from "react";
import { DeezerRecommendation } from "../types/notification";

const Recommendation = ({
  description: { text },
}: DeezerRecommendation): JSX.Element => <p>{text}</p>;

export default React.memo(Recommendation);
