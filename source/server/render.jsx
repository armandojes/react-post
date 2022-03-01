import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import renderToStringAsync from 'app/react-fetch-ssr/renderToStringAsync';
import { Provider as ServerParamsProvider } from 'app/context/serverParams';
import Markup from './markup';
import App from '../app';

const render = async (request) => {
  try {
    const sheet = new ServerStyleSheet();
    const session = request.cookies && request.cookies.session ? JSON.parse(request.cookies.session) : {};

    const { content, syncServerStates } = await renderToStringAsync(
      <ServerParamsProvider value={{ session }}>
        <StyleSheetManager sheet={sheet.instance}>
          <StaticRouter location={request.url}>
            <App />
          </StaticRouter>
        </StyleSheetManager>
      </ServerParamsProvider>,
    );

    const styleElement = sheet.getStyleElement();

    const fullHtml = renderToStaticMarkup(
      <Markup content={content} styleElement={styleElement} syncServerStates={syncServerStates} />,
    );

    return fullHtml;
  } catch (error) {
    console.log('server render failed', error);
    return renderToStaticMarkup(<Markup content="" />);
  }
};

export default render;
