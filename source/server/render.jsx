import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import reactFetch from 'react-fetch-ssr';
import Markup from './markup';
import App from '../app';

const render = async (request) => {
  try {
    const sheet = new ServerStyleSheet();

    const { content, states } = await reactFetch.renderToStringAsync(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={request.url}>
          <App />
        </StaticRouter>
      </StyleSheetManager>,
    );

    const styleElement = sheet.getStyleElement();

    const fullHtml = renderToStaticMarkup(
      <Markup content={content} styleElement={styleElement} statesScript={states} />,
    );

    return fullHtml;
  } catch (error) {
    console.log('server render failed', error);
    return renderToStaticMarkup(<Markup content="" />);
  }
};

export default render;
