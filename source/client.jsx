import React, { StrictMode } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './app';

const initialState = window.reduxState;
const enhander = composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger));
const store = createStore(() => ({}), initialState, enhander);

hydrate(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('render_target'),
);
