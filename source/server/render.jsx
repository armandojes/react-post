import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import renderToStringAsync from 'app/react-fetch-ssr/renderToStringAsync';
import Markup from './markup';
import App from '../app';

const render = async (request) => {
  try {
    const sheet = new ServerStyleSheet();

    const content = await renderToStringAsync(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={request.url}>
          <App />
        </StaticRouter>
      </StyleSheetManager>,
    );

    const styleElement = sheet.getStyleElement();

    const fullHtml = renderToStaticMarkup(
      <Markup content={content} styleElement={styleElement} />,
    );

    return fullHtml;
  } catch (error) {
    console.log('server render failed', error);
    return renderToStaticMarkup(<Markup content="" />);
  }
};

export default render;
