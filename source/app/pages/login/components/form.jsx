import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import { func, object } from 'prop-types';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';
import Button from 'app/components/button';
import { Collapse } from '@mui/material';
import objectValidator from 'app/helpers/objectValidator';

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

function Form({ inputValues, onInputChange, onAcept }) {
  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    onInputChange(event.target.name, event.target.value);
  };

  const handleInputFocus = (event) => {
    if (errors[event.target.name]) {
      const currentErrors = { ...errors };
      delete currentErrors[event.target.name];
      setErrors(currentErrors);
    }
  };

  const handleValidateAcept = () => {
    const currentErrors = formValidator(inputValues);
    if (currentErrors) setErrors(currentErrors);
    else onAcept();
  };

  return (
    <FormElement>
      <Text size="1.2em" align="center">
        Iniciar session
      </Text>
      <Spacer height="2em" />
      <Text>Correo electrónico</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!errors.email}
        value={inputValues.email || ''}
        name="email"
        onChange={handleInputChange}
      />
      <Collapse in={!!errors.email}>
        <ErrorMessage>{errors.email}</ErrorMessage>
      </Collapse>
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!errors.password}
        value={inputValues.password || ''}
        onChange={handleInputChange}
        name="password"
      />
      <Collapse in={!!errors.password}>
        <ErrorMessage>{errors.password}</ErrorMessage>
      </Collapse>
      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
        onClick={handleValidateAcept}
        textHoverColor={colors.white}
      >
        Iniciar session
      </Button>
      <Spacer height="1em" />
    </FormElement>
  );
}

Form.propTypes = {
  onAcept: func,
  inputValues: object,
  onInputChange: func,
};

Form.defaultProps = {
  onInputChange: () => {},
  onAcept: () => {},
  inputValues: {},
};

const FormElement = styled.div`
  padding: 2em;
  border: 1px solid ${colors.gray};
  box-shadow: 5px 5px 10px ${colors.gray};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 0em;
    border: none;
    box-shadow: none;
    max-width: 350px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.3em;
`;

export default Form;
