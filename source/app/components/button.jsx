import { element, number, oneOfType, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/values';

function Button({
  children,
  className,
  textAlign,
  backgrounColor,
  backgrounHoverColor,
  textColor,
  textHoverColor,
  ...otherProps
}) {
  return (
    <ButtonStyled
      className={className}
      $textAlign={textAlign}
      $backgrounColor={backgrounColor}
      $backgrounHoverColor={backgrounHoverColor}
      $textColor={textColor}
      $textHoverColor={textHoverColor}
      {...otherProps}
    >
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: oneOfType([string, number, element]).isRequired,
  className: string,
  textAlign: string,
  backgrounColor: string,
  backgrounHoverColor: string,
  textColor: string,
  textHoverColor: string,
};

Button.defaultProps = {
  className: '',
  textAlign: 'left',
  backgrounColor: colors.grayLight,
  backgrounHoverColor: 'initial',
  textColor: 'initial',
  textHoverColor: 'initial',
};

const ButtonStyled = styled.button`
  background-color: ${(props) => props.$backgrounColor};
  text-align: ${(props) => props.$textAlign};
  padding: 0.5em;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  color: ${(props) => props.$textColor};
  :hover {
    background-color: ${(props) => props.backgrounHoverColor};
    color: ${(props) => props.$textHoverColor};
  }
`;

export default Button;
