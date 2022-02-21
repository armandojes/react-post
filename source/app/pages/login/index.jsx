import React from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import useForm from 'app/hooks/useForm';
import Form from './components/form';
import useErrorMessage from '../../hooks/useErrorMessage';

const rules = {
  email: (email) => (!email ? 'the email is incorrect' : false),
  password: (password) => (!password ? 'the password is incorrect' : false),
};

function Login() {
  const { inputValues, inputsWithError, validate, removeInputError, updateFormValue } = useForm({ rules });
  const { errorMessage, setErrorMessage } = useErrorMessage();

  const handleClick = () => {
    const { firstErrorMessage } = validate();
    if (firstErrorMessage) {
      setErrorMessage(firstErrorMessage);
    }
  };

  return (
    <ContainerStyled>
      <Form
        errorMessage={errorMessage}
        onRemoveError={removeInputError}
        onInputChange={updateFormValue}
        onClick={handleClick}
        inputsWithError={inputsWithError}
        inputValues={inputValues}
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
