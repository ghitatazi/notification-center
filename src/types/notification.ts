import { VALIDITY_PERIOD_KEY } from "../constants/validityPeriodKey";
import { ContentType } from "./content";

export enum NOTIFICATION_TYPE {
  RECOMMENDATION = "recommendation",
  UPDATE = "update",
  NEW_CONTENT = "new_content",
  SHARING = "sharing",
}

export type ValidityPeriod = {
  createdAt: string;
  expiresAt: string;
};

// id to uniquelly identify a notification
type BasicNotification = {
  id: string;
};

// adding Deezer as a prefix to all types of notifications to avoid confusion with the associated React components
export type DeezerRecommendation = BasicNotification & {
  type: NOTIFICATION_TYPE.RECOMMENDATION;
  description: {
    text: string;
  };
};

export type DeezerUpdate = BasicNotification & {
  type: NOTIFICATION_TYPE.UPDATE;
  [VALIDITY_PERIOD_KEY]: ValidityPeriod;
  description: {
    text: string;
  };
};

export type DeezerNewContent = BasicNotification & {
  type: NOTIFICATION_TYPE.NEW_CONTENT;
  content: string;
  [VALIDITY_PERIOD_KEY]: ValidityPeriod;
  description: {
    content: ContentType;
  };
};

export type DeezerSharing = BasicNotification & {
  type: NOTIFICATION_TYPE.SHARING;
  content: string;
  [VALIDITY_PERIOD_KEY]: ValidityPeriod;
  description: {
    sender: string;
    message: string;
    content: ContentType;
  };
};

// adding Deezer as a prefix bc Notification is a reserved type in TypeScript
export type DeezerNotification =
  | DeezerRecommendation
  | DeezerUpdate
  | DeezerNewContent
  | DeezerSharing;

type HasValidityPeriod<T> = typeof VALIDITY_PERIOD_KEY extends keyof T
  ? T
  : never;

// add a type here if a new type of notification is added
export type HasNotificationAValidityPeriod =
  | HasValidityPeriod<DeezerRecommendation>
  | HasValidityPeriod<DeezerUpdate>
  | HasValidityPeriod<DeezerNewContent>
  | HasValidityPeriod<DeezerSharing>;
