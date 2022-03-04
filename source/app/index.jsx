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
import PostDetail from './pages/postDetail';
import PostEditor from './pages/postEditor';
import 'highlight.js/styles/github.css';
import 'react-markdown-editor-lite/lib/index.css';

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
              <Route path="/post/:postUrl" element={<PostDetail />} />
              <Route path="/post-editor" element={<PostEditor />} />
            </Routes>
          </>
        </SnackbarProvider>
      </StylesProvider>
    </SessionProvider>
  );
}

export default App;
