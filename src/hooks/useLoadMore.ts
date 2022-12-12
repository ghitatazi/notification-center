import { useEffect, useState } from "react";
import { usePrevious } from "./usePrevious";

export function useLoadMore<T>({ step }: { step: number }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(step);
  const previousIndex = usePrevious(index);
  const [data, setData] = useState<T[]>([]);
  const [slicedData, setSlicedData] = useState<T[]>([]);

  const loadMore = () => {
    setIndex((index) => index + step);
  };

  useEffect(() => {
    if (data.length > 0) {
      // first time data changes
      if (index === step) {
        setSlicedData(data.slice(0, step));
      } else {
        setSlicedData((d) => [...d, ...data.slice(previousIndex, index)]);
      }

      if (index >= data.length) {
        setIsCompleted(true);
      }
    }
  }, [data, index]);

  return {
    setDataToBeSliced: setData,
    slicedData,
    isCompleted,
    loadMore,
  };
}
