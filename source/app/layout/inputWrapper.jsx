import { element, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function InputWrapper({ children, endIcon, className }) {
  return (
    <Wrapper className={className}>
      {children}
      {endIcon && (
        <EndIconWrapper>
          {endIcon}
        </EndIconWrapper>
      )}
    </Wrapper>
  );
}

InputWrapper.propTypes = {
  children: element.isRequired,
  endIcon: element,
  className: string,
};

InputWrapper.defaultProps = {
  endIcon: null,
  className: '',
};

// styled
const Wrapper = styled.div`
  display: block;
  position: relative;
`;

const EndIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  right: .5em;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InputWrapper;
