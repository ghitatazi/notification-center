import { useEffect } from "react";
import { DATA_LOADING_STEP } from "../../constants/dataLoadingStep";
import { useLoadMore } from "../../hooks/useLoadMore";
import { useNotifications } from "../../hooks/useNotifications";
import "../../styles/NotificationCenter.css";
import { DeezerNotification } from "../../types/notification";
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

  const { setDataToBeSliced, slicedData, isCompleted, loadMore } =
    useLoadMore<DeezerNotification>({ step: DATA_LOADING_STEP });

  useEffect(() => {
    setDataToBeSliced(notifications);
  }, [notifications]);

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
      {slicedData.map((notification, index) => (
        <div key={notification.id}>
          <Notification
            notification={notification}
            setTotalReadNotifications={setTotalReadNotifications}
          />
          <hr />
        </div>
      ))}
      <div className="load-more-container">
        {isCompleted ? (
          <button type="button" disabled>
            That's It
          </button>
        ) : (
          <button type="button" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
