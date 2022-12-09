import { useNotifications } from "../hooks/useNotifications";
import "../styles/NotificationCenter.css";
import Notification from "./Notification";

export const NotificationCenter = (): JSX.Element => {
  const {
    notifications,
    isLoading,
    isError,
    totalNotifications,
    totalReadNotifications,
    setTotalReadNotifications,
  } = useNotifications();

  if (isLoading) return <>{"Loading..."}</>;

  if (isError) return <>{"Error..."}</>;

  return (
    <div className="notification-center">
      <p>Total notifications: {totalNotifications}</p>
      <p>
        Total unread notifications:{" "}
        {totalNotifications - totalReadNotifications}
      </p>
      <hr />
      {notifications.map((notification, index) => (
        <>
          <Notification
            key={notification.id}
            notification={notification}
            setTotalReadNotifications={setTotalReadNotifications}
          />
          {index < totalNotifications - 1 && <hr />}
        </>
      ))}
      {totalNotifications === 0 && (
        <>{"You have no notifications for the moment"}</>
      )}
    </div>
  );
};
