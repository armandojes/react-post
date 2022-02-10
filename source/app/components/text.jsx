import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Text({ children, bold, size, color }) {
  return (
    <TextStyled $bold={bold} $size={size} $color={color}>
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  bold: false,
  size: '1em',
  color: '#000',
};

Text.propTypes = {
  children: string.isRequired,
  bold: bool,
  size: string,
  color: string,
};

const TextStyled = styled.div`
  font-weight: ${(props) => (props.$bold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.$size)};
  color: ${(props) => props.$color};
  line-height: 1.5em;
`;

export default Text;
