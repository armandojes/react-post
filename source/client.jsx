import React, { StrictMode } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from 'app/redux/reducer';

import App from './app';
import persistAtCookie from './app/redux/middlewares/persistAtCookie';

const initialState = window.reduxState;
const enhander = composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger, persistAtCookie));
const store = createStore(reducer, initialState, enhander);

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
