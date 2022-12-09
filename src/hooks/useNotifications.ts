import { useEffect, useState } from "react";
import { FETCH_MOCKS_TIMEOUT_VALUE } from "../constants/fetchMocksTimeoutValue";
import { notificationsMock } from "../mocks";
import { DeezerNotification } from "../types/notification";
import { mockFetchWithTimeout } from "../utils/mockFetchWithTimeout";
import { transformNotifications } from "../utils/notification";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<DeezerNotification[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [totalReadNotifications, setTotalReadNotifications] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    mockFetchWithTimeout(notificationsMock, FETCH_MOCKS_TIMEOUT_VALUE)
      .then(({ data, timeoutId }) => {
        clearTimeout(timeoutId);
        setNotifications(transformNotifications(data));
      })
      .catch((reason) => {
        console.log(reason);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setTotalNotifications(notifications.length);
  }, [notifications]);

  return {
    notifications,
    isLoading,
    isError,
    totalNotifications,
    totalReadNotifications,
    setTotalReadNotifications,
  };
};
