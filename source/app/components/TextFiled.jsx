import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/values';

function TextField({ error, fullWidth, ...props }) {
  return <Input {...props} $fullWidth={fullWidth} $error={error} />;
}

TextField.propTypes = {
  fullWidth: bool,
  error: bool,
};

TextField.defaultProps = {
  fullWidth: false,
  error: false,
};

const Input = styled.input`
  height: 2.5em;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.$error ? 'red' : colors.gray)};
  color: ${colors.dark};
  outline: none;
  width: ${(props) => (props.$fullWidth ? '100%' : 'initial')};
`;

export default TextField;
