import React from 'react';
import { Routes, Route } from 'react-router';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'app/GlobalStyle';
import { StylesProvider } from '@mui/styles';
import Home from 'app/pages/home';
import Login from 'app/pages/login';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'app/context/session';
import Header from './components/header';

function App() {
  return (
    <SessionProvider>
      <StylesProvider injectFirst>
        <SnackbarProvider maxSnack={3}>
          <>
            <Normalize />
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        </SnackbarProvider>
      </StylesProvider>
    </SessionProvider>
  );
}

export default App;
