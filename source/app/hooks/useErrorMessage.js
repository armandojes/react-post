import { useRef, useState } from "react";

const useErrorMessage = () => {
  const [state, setState] = useState(null);
  const timerRef = useRef(null);

  const setErrorMessage = (errorMessage, time = 7000) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState(errorMessage);
    timerRef.current = setTimeout(() => {
      setState(null);
      timerRef.current = null;
    }, time);
  };

  return { setErrorMessage, errorMessage: state };
};

export default useErrorMessage;
