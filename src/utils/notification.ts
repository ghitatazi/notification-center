import { SERVER_DATA_ERROR_PREFIX } from "../constants/errorsPrefix";
import { VALIDITY_PERIOD_KEY } from "../constants/validityPeriodKey";
import {
  DeezerNotification,
  HasNotificationAValidityPeriod,
} from "../types/notification";
import { isDateInTheFuture, isValidDate } from "./date";

const getCreatedAtDate = (notification: HasNotificationAValidityPeriod) =>
  new Date(notification[VALIDITY_PERIOD_KEY].createdAt);

const getExpiresAtDate = (notification: HasNotificationAValidityPeriod) =>
  new Date(notification[VALIDITY_PERIOD_KEY].expiresAt);

const hasValidityPeriod = (
  notification: DeezerNotification
): notification is HasNotificationAValidityPeriod => {
  return (
    (notification as HasNotificationAValidityPeriod)[VALIDITY_PERIOD_KEY] !==
    undefined
  );
};

const filterExpiredNotifications = (notifications: DeezerNotification[]) =>
  notifications.filter((notif) => {
    // check if data from server is conform: if validity period is set, expiry date should exist
    if (hasValidityPeriod(notif) && !isValidDate(getExpiresAtDate(notif))) {
      throw new Error(
        `[${SERVER_DATA_ERROR_PREFIX}] Absence of expiry date for notification with id: ${notif.id}`
      );
    }
    if (hasValidityPeriod(notif) && isValidDate(getExpiresAtDate(notif))) {
      return isDateInTheFuture(getExpiresAtDate(notif));
    }
    return notif;
  });

/*
  Sort notifications in descending order (newest -> oldest)
  - Notifications without validity period will be put at the beginning of the array (considered important)
  - Other notifications will be sorted according to the creation date
*/
const sortNotificationsInDescOrder = (notifications: DeezerNotification[]) => {
  notifications.sort((notifA, notifB) => {
    // check if data from server is conform: if validity period is set, creation date should exist
    if (hasValidityPeriod(notifA) && !isValidDate(getCreatedAtDate(notifA))) {
      throw new Error(
        `[${SERVER_DATA_ERROR_PREFIX}] Absence of creation date for notification with id: ${notifA.id}`
      );
    }
    if (hasValidityPeriod(notifB) && !isValidDate(getCreatedAtDate(notifB))) {
      throw new Error(
        `[${SERVER_DATA_ERROR_PREFIX}] Absence of creation date for notification with id: ${notifB.id}`
      );
    }
    // sort
    if (hasValidityPeriod(notifA) && hasValidityPeriod(notifB)) {
      return (
        Number(getCreatedAtDate(notifB)) - Number(getCreatedAtDate(notifA))
      );
    } else if (VALIDITY_PERIOD_KEY in notifA) {
      // B doesnt have a validity date => B before A
      return 1;
    } else if (VALIDITY_PERIOD_KEY in notifB) {
      // A doesnt have a validity date => A before B
      return -1;
    }
    // default: dont change the order
    return 0;
  });

  return notifications;
};

export const transformNotifications = (notifications: DeezerNotification[]) => {
  const filtered = filterExpiredNotifications(notifications);
  return sortNotificationsInDescOrder(filtered);
};
