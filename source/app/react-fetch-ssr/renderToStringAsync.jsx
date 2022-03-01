import React from "react";
import { renderToString } from "react-dom/server";
import createServerFetchs from "./createServerFetchs";
import createServerStates from "./createServerStates";
import { RegisterStateProvider } from "./registerStateContext";
import { RegisterFetchProvider } from "./registerFetchsContext";

const renderToStringAsync = async (reactElement) => {
  const { registerState, setCollectingMode, getState } = createServerStates();
  const { registerFetch, executeAll } = createServerFetchs();

  function AppEnhanced() {
    return (
      <RegisterStateProvider value={registerState}>
        <RegisterFetchProvider value={registerFetch}>
          {reactElement}
        </RegisterFetchProvider>
      </RegisterStateProvider>
    );
  }

  renderToString(<AppEnhanced />);
  setCollectingMode();
  await executeAll();

  const content = renderToString(<AppEnhanced />);
  const serverStates = getState();

  const syncServerStates = `window.__SERVER__STATES__ = ${JSON.stringify(
    serverStates
  )}`;

  return { content, syncServerStates };
};

export default renderToStringAsync;
