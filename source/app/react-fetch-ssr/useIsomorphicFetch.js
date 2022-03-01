import { useEffect } from "react";
import isDom from "./isDom";
import { useRegisterFetch } from "./registerFetchsContext";

const useIsomorphicFetch = (handler, deps = []) => {
  if (isDom) {
    return useEffect(() => {
      handler();
    }, deps);
  }
  const registerFetch = useRegisterFetch();
  return registerFetch(handler);
};

export default useIsomorphicFetch;
