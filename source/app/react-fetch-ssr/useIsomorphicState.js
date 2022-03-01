/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import isDom from "./isDom";
import { useRegisterState } from "./registerStateContext";

const useIsomorphicState = (key, initialState) => {
  if (isDom) {
    const serverStates = window.__SERVER__STATES__ || {};
    const stateByServer = serverStates[key];
    return useState(stateByServer || initialState);
  }
  const registerState = useRegisterState();
  return registerState(initialState, key);
};

export default useIsomorphicState;
