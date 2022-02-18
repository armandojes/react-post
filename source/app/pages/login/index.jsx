import React from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import Form from './components/form';

function Login() {
  return (
    <ContainerStyled>
      <Form />
    </ContainerStyled>
  );
}

const ContainerStyled = styled(Container)`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
