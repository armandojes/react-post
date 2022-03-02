import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Spacer({ width, height }) {
  return <SpacerStyled $width={width} $height={height} />;
}

Spacer.propTypes = {
  width: string,
  height: string,
};

Spacer.defaultProps = {
  width: 'initial',
  height: 'initial',
};

const SpacerStyled = styled.div`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
`;

export default Spacer;
