import { bool, element } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Container({ children, disabledVerticalPadding }) {
  return (
    <Wrapper $disabledVerticalPadding={disabledVerticalPadding}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: ${(props) => (props.$disabledVerticalPadding ? '0px .5em' : '.5em')};
`;

Container.propTypes = {
  children: element.isRequired,
  disabledVerticalPadding: bool,
};

Container.defaultProps = {
  disabledVerticalPadding: false,
};

export default Container;
