import React from 'react';
import { renderToString } from 'react-dom/server';
import createServerFetchs from './createServerFetchs';
import createServerStates from './createServerStates';
import { RegisterStateProvider } from './registerStateContext';
import { RegisterFetchProvider } from './registerFetchsContext';

const renderToStringAsync = async (app) => {
  const { registerState, getState, setCollectingMode } = createServerStates();
  const { registerFetch, getFetchs, executeAll } = createServerFetchs();

  console.log('febodreState', getState());
  console.log('febodrefetchs', getFetchs());

  function AppEnhanced() {
    return (
      <RegisterStateProvider value={registerState}>
        <RegisterFetchProvider value={registerFetch}>
          {app}
        </RegisterFetchProvider>
      </RegisterStateProvider>
    );
  }

  renderToString(<AppEnhanced />);
  setCollectingMode();
  await executeAll();

  const content = renderToString(<AppEnhanced />);

  console.log('afterState', getState());
  console.log('afterFetchs', getFetchs());

  return content;
};

export default renderToStringAsync;
