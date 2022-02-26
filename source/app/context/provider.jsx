import { element } from 'prop-types';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import { StylesProvider } from '@mui/styles';
import { SessionProvider } from './session';

function Provider({ children }) {
  return (
    <SessionProvider>
      <StylesProvider injectFirst>
        <SnackbarProvider maxSnack={3}>
          {children}
        </SnackbarProvider>
      </StylesProvider>
    </SessionProvider>
  );
}

Provider.propTypes = {
  children: element.isRequired,
};

export default Provider;
