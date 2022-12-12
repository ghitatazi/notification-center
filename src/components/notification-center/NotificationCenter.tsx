import { useNotifications } from "../../hooks/useNotifications";
import "../../styles/NotificationCenter.css";
import Notification from "../notifications/Notification";
import { Empty } from "./Empty";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const NotificationCenter = (): JSX.Element => {
  const {
    notifications,
    isLoading,
    isError,
    totalNotifications,
    totalReadNotifications,
    setTotalReadNotifications,
  } = useNotifications();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  if (totalNotifications === 0) return <Empty />;

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
    </div>
  );
};
