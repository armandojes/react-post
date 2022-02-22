import styled from 'styled-components';
import { string } from 'prop-types';
import React from 'react';
import { Collapse } from '@mui/material';
import Text from './text';

function ErrorMessage({ message }) {
  return (
    <Collapse in={!!message}>
      <ErrorMessageStyled>
        {message || ''}
      </ErrorMessageStyled>
    </Collapse>

  );
}

ErrorMessage.propTypes = {
  message: string,
};

ErrorMessage.defaultProps = {
  message: null,
};

const ErrorMessageStyled = styled(Text)`
  background-color: #ff9c9cb0;
  color: #f13636;
  padding: .2em .5em;
  border-radius: .5em;
  margin-bottom: .5em;
`;

export default ErrorMessage;
