export const mockFetchWithTimeout = (
  data: ReturnType<typeof JSON.parse>,
  timeoutValue: number
) =>
  new Promise<{
    data: typeof data;
    timeoutId: ReturnType<typeof setTimeout>;
  }>((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve({ data, timeoutId });
    }, timeoutValue);
  });
