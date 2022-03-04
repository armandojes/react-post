import React, { useState } from 'react';
import Container from 'app/components/container';
import styled from 'styled-components';
import useForm from 'app/hooks/useForm';
import { CircularProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import FormSection from './components/form';

import api from '../../api';
import { useSession } from '../../context/session';

function Login() {
  const { inputValues, updateFormValue } = useForm();
  const { setSession } = useSession();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleAcept = async () => {
    setLoading(true);
    const response = await api.users.login(inputValues.email, inputValues.password);
    if (response.error) {
      setLoading(false);
      enqueueSnackbar(response.errorMessage, { variant: 'error' });
    } else {
      enqueueSnackbar('Inicio de session exitoso', { variant: 'success' });
      setSession({ token: response.token, ...response.userData });
      setLoading(false);
      navigate('/', { replace: true });
    }
  };

  return (
    <ContainerStyled>
      {!loading && <FormSection onInputChange={updateFormValue} onAcept={handleAcept} inputValues={inputValues} />}
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
