import React from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import useLogin from 'app/logic/useLogin';
import useForm from 'app/hooks/useForm';
import Form from './components/form';

function Login() {
  const { inputValues, updateFormValue } = useForm();
  const { loading, login } = useLogin();

  const handleSubmit = () => {
    login(inputValues.name, inputValues.password);
  };

  return (
    <ContainerStyled>
      {!loading && (
        <Form
          onSubmit={handleSubmit}
          inputValues={inputValues}
          onAnyInputChange={updateFormValue}
        />
      )}
      {loading && <CircularProgress />}
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
