/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import hydrateState from './hydrateState';
import isDom from './isDom';
import { useRegisterState } from './registerStateContext';

const useIsomorphicState = (key, initialState) => {
  if (isDom) {
    const [state, setState] = useState(hydrateState(key) || initialState);
    const setFragmentState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));
    return [state, setState, setFragmentState];
  }
  const registerState = useRegisterState();
  const [state, setState] = registerState(initialState, key);
  const setFragmentState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));
  return [state, setState, setFragmentState];
};

export default useIsomorphicState;
