import { useEffect, useRef } from "react";

// we only want to run our effect when the dependencies change, not in the first run
export const useUpdateEffect = (callback: Function, dependencies: any[]) => {
  const firstMountRef = useRef(true);

  useEffect(() => {
    if (!!firstMountRef.current) {
      firstMountRef.current = false;
      return;
    }
    callback();
  }, [...dependencies]);
};
