import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Text({ children, bold, size }) {
  return (
    <TextStyled $bold={bold} $size={size}>
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  bold: false,
  size: 'initial',
};

Text.propTypes = {
  children: string.isRequired,
  bold: bool,
  size: string,
};

const TextStyled = styled.div`
  font-weight: ${(props) => (props.$bold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.$size)};
`;

export default Text;
