import React, { useState } from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import useForm from 'app/hooks/useForm';
import { CircularProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import Form from './components/form';
import objectValidator from '../../helpers/objectValidator';
import api from '../../api';

const formValidator = (values) => objectValidator(values, {
  email: {
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    length: { min: 5, max: 80 },
    message: 'El correo no es válido',
  },
  password: {
    required: true,
    length: { min: 8, max: 50 },
    message: 'La contraseña es inválida',
  },
});

function Login() {
  const { inputValues, inputsWithError, removeInputError, updateFormValue, setInputsWithErrors } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    const error = formValidator(inputValues);
    if (error) {
      setInputsWithErrors(error);
    } else {
      setLoading(true);
      const response = await api.user.login(inputValues.email, inputValues.password);
      if (response.error) {
        setLoading(false);
        enqueueSnackbar(response.errorMessage, { variant: 'error' });
      } else {
        enqueueSnackbar('Inicio de session exitoso', { variant: 'success' });
        setLoading(false);
        navigate('/', { replace: true });
      }
    }
  };

  return (
    <ContainerStyled>
      {!loading && (
        <Form
          onRemoveError={removeInputError}
          onInputChange={updateFormValue}
          onClick={handleClick}
          inputsWithError={inputsWithError}
          inputValues={inputValues}
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
