import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reactFetch from 'react-fetch-ssr';
import reducer from 'app/redux/reducer';
import Markup from './markup';
import App from '../app';

const render = async (request) => {
  try {
    const reduxPersistState = JSON.parse(request.cookies.reduxState);
    const store = createStore(reducer, reduxPersistState, applyMiddleware(thunk));
    const sheet = new ServerStyleSheet();

    const { content } = await reactFetch.renderToStringAsync(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={request.url}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      </StyleSheetManager>,
    );

    const reduxState = store.getState();
    const styleElement = sheet.getStyleElement();

    const fullHtml = renderToStaticMarkup(
      <Markup content={content} reduxState={reduxState} styleElement={styleElement} />,
    );

    return fullHtml;
  } catch (error) {
    console.log('server render failed', error);
    return renderToStaticMarkup(<Markup content="" />);
  }
};

export default render;
