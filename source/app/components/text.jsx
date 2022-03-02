import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Text({ children, bold, size, color, align, className, ...otherProps }) {
  return (
    <TextStyled
      $bold={bold}
      $size={size}
      $color={color}
      $align={align}
      className={className}
      {...otherProps}
    >
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  bold: false,
  size: '1em',
  color: '#000',
  align: 'left',
  className: '',
};

Text.propTypes = {
  children: string.isRequired,
  bold: bool,
  size: string,
  color: string,
  align: string,
  className: string,
};

const TextStyled = styled.div`
  font-weight: ${(props) => (props.$bold ? 'bold' : 'normal')};
  font-size: ${(props) => props.$size};
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$align};
  line-height: 1.5em;
`;

export default Text;
