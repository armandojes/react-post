/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import Form from './components/form';
import useForm from '../../hooks/useForm';

const rules = {
  email: (value) => (!value ? 'the email is incorrect' : false),
  password: (value) => (!value ? 'the password is incorrect' : false),
};

function Login() {
  const { handleErrorChange, handleInputChange, inputErrors, inputValues } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <ContainerStyled>
      <Form
        onInputChange={handleInputChange}
        errors={inputErrors}
        values={inputValues}
        errorMessage={errorMessage}
      />
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
