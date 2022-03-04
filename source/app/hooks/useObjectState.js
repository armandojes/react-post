import { useState } from 'react';

const useObjectState = () => {
  const [state, setState] = useState();

  const setPartialState = (newValue) => {
    setState((prevState) => ({ ...prevState, ...newValue }));
  };

  return [state, setPartialState];
};

export default useObjectState;
