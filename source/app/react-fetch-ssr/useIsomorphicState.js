import { useState } from 'react';
import isDom from './isDom';
import { useRegisterState } from './registerStateContext';

const useIsomorphicState = (initialState, key) => {
  if (isDom) return useState(initialState);
  const registerState = useRegisterState();
  return registerState(initialState, key);
};

export default useIsomorphicState;
