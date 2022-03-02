import React from 'react';
import error404image from 'app/assets/404.gif';
import styled from 'styled-components';

function Error404() {
  return (
    <Wrapper>
      <img src={error404image} alt="error404 icon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Error404;
