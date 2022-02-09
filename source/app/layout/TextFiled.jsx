import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function TextField({ fullWidth, ...props }) {
  return (
    <Input {...props} $fullWidth={fullWidth} />
  );
}

TextField.propTypes = {
  fullWidth: bool,
};

TextField.defaultProps = {
  fullWidth: false,
};

const Input = styled.input`
  height: 2.5em;
  padding: .5em;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
  width: ${(props) => (props.$fullWidth ? '100%' : 'initial')};
`;

export default TextField;
