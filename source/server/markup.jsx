import { object, string, element, oneOfType, array } from 'prop-types';
import React from 'react';

function Markup({ content, reduxState, styleElement }) {
  return (
    <html lang="es" charset="utf-8">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <title>react</title>
        {styleElement}
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: `window.reduxState = ${JSON.stringify(reduxState)}` }} />
        <script src={`${publicPath}app.js`} />
      </body>
    </html>
  );
}

Markup.propTypes = {
  content: string.isRequired,
  reduxState: object.isRequired,
  styleElement: oneOfType([element, array]).isRequired,
};

export default Markup;
