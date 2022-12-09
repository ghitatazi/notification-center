import React, { useCallback, useMemo, useState } from "react";
// @ts-ignore
import { ReactComponent as Logo } from "../assets/icons8-done.svg";
import { NOTIFICATION_TYPE_WORDINGS } from "../constants/notificationTypeWordings";
import { useUpdateEffect } from "../hooks/useUpdateEffect";
import "../styles/Notification.css";
import { DeezerNotification, NOTIFICATION_TYPE } from "../types/notification";
import NewContent from "./NewContent";
import Recommendation from "./Recommendation";
import Sharing from "./Sharing";
import Update from "./Update";

type NotificationProps = {
  notification: DeezerNotification;
  setTotalReadNotifications: React.Dispatch<React.SetStateAction<number>>;
};

const Notification = ({
  notification,
  setTotalReadNotifications,
}: NotificationProps): JSX.Element => {
  const [isRead, setIsRead] = useState(false);

  const toggleIsRead = () => {
    setIsRead((isRead) => !isRead);
  };

  useUpdateEffect(() => {
    !!isRead
      ? setTotalReadNotifications((total) => total + 1)
      : setTotalReadNotifications((total) => total - 1);
  }, [isRead]);

  const getSpecificContent = useCallback(
    (notification: DeezerNotification) => {
      const { type } = notification;
      let returnedComponent;

      switch (type) {
        case NOTIFICATION_TYPE.RECOMMENDATION:
          returnedComponent = <Recommendation {...notification} />;
          break;
        case NOTIFICATION_TYPE.UPDATE:
          returnedComponent = <Update {...notification} />;
          break;
        case NOTIFICATION_TYPE.NEW_CONTENT:
          returnedComponent = <NewContent {...notification} />;
          break;
        case NOTIFICATION_TYPE.SHARING:
          returnedComponent = <Sharing {...notification} />;
          break;
        default:
          returnedComponent = <></>;
      }
      return returnedComponent;
    },
    [notification]
  );

  const title = useMemo(() => {
    const notificationTypeName = NOTIFICATION_TYPE_WORDINGS[notification.type];
    return !!isRead ? `${notificationTypeName} - read` : notificationTypeName;
  }, [isRead]);

  const buttonIsReadText = useMemo(
    () => (!!isRead ? "Mark as not read" : "Mark as read"),
    [isRead]
  );

  return (
    <div className="notification">
      <div className="notification-title">
        {title} {!!isRead && <Logo />}
      </div>
      {getSpecificContent(notification)}
      <button className="notification-mark-reading" onClick={toggleIsRead}>
        {buttonIsReadText}
      </button>
    </div>
  );
};

export default React.memo(Notification);
