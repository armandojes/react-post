import React, { useState } from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import useForm from 'app/hooks/useForm';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import objectValidator from 'app/helpers/objectValidator';
import FormSection from './components/form';
import api from '../../api';
import { useSetSession } from '../../context/session';
import useSetNotification from '../../hooks/useSetNotification';

const formValidator = (values) =>
  objectValidator(values, {
    email: {
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      length: { min: 5, max: 80 },
      message: 'El correo no es válido',
    },
    password: {
      required: true,
      length: { min: 8, max: 50 },
      message: 'La contraseña no es válida',
    },
  });

function Login() {
  const navigate = useNavigate();
  const setSession = useSetSession();
  const setNotification = useSetNotification();
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const handleLogIn = async () => {
    const errors = formValidator(form.inputValues);
    if (errors) return form.setInputErrors(errors);
    setLoading(true);
    const response = await api.users.login(form.inputValues.email, form.inputValues.password);
    if (response.error) {
      setNotification(response.errorMessage, 'error');
      return setLoading(false);
    }
    setNotification('Inicio de session exitoso');
    setSession({ token: response.token, ...response.userData });
    return navigate('/', { replace: true });
  };

  return (
    <ContainerStyled>
      {!loading && (
        <FormSection
          onInputChange={form.updateFormValue}
          onRemoveInputError={form.removeInputError}
          inputValues={form.inputValues}
          inputErrors={form.inputErrors}
          onLogIn={handleLogIn}
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
