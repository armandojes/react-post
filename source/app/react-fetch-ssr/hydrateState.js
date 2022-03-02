/* eslint-disable no-underscore-dangle */
const hydrateState = (key) => {
  const serverStates = window.__SERVER__STATES__ || {};
  const stateByServer = serverStates[key];
  setTimeout(() => {
    delete serverStates[key];
  }, 2000);
  return stateByServer;
};

export default hydrateState;
