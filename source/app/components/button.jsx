import { element, number, oneOfType, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/values';

function Button({ children, className }) {
  return (
    <ButtonStyled className={className}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: oneOfType([string, number, element]).isRequired,
  className: string,
};

Button.defaultProps = {
  className: '',
};

const ButtonStyled = styled.div`
  background: ${colors.grayLight};
  padding: .5em;
  border-radius: 20%;
`;

export default Button;
