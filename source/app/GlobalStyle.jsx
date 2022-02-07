import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none!important;
  }

  @media screen and (max-width:1550px) {
    body {
      font-size: 14px;
    }
  }

  @media screen and (max-width:1550px) {
    body {
      font-size: 14px;
    }
  }
  @media screen and (max-width:1300px) {
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyle;
