import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'app/GlobalStyle';
import Header from './components/header';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
