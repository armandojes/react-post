const createServerStates = () => {
  const states = {};
  let collectingMode = false;

  const registerState = (initialState, key) => {
    // validate collecting mode
    if (!collectingMode) {
      states[key] = initialState;
    }

    // state updater
    const updater = (newState) => {
      states[key] = typeof newState === 'function'
        ? newState(states[key])
        : newState;
    };

    return [states[key] || initialState, updater];
  };

  const getState = () => states;

  const setCollectingMode = () => {
    collectingMode = true;
  };

  return {
    getState,
    registerState,
    setCollectingMode,
  };
};

export default createServerStates;
