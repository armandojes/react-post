import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';
import Button from 'app/components/button';
import { Collapse } from '@mui/material';
import objectValidator from 'app/helpers/objectValidator';
import { func, object } from 'prop-types';

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

function Form({ inputValues, onAnyInputChange, onSubmit }) {
  const [inputsError, setInputsError] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onAnyInputChange(name, value);
  };

  const handleInputFocus = (event) => {
    if (inputsError[event.target.name]) {
      const currentErrors = { ...inputsError };
      delete currentErrors[event.target.name];
      setInputsError(currentErrors);
    }
  };

  const handleSubmit = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    const errors = formValidator(inputValues);
    if (errors) return setInputsError(errors);
    return onSubmit(inputValues);
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
        error={!!inputsError.email}
        value={inputValues.email}
        onChange={handleInputChange}
        name="email"
      />
      <Collapse in={!!inputsError.email}>
        <ErrorMessage>{inputsError.email}</ErrorMessage>
      </Collapse>
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!inputsError.password}
        value={inputValues.password}
        onChange={handleInputChange}
        name="password"
      />
      <Collapse in={!!inputsError.password}>
        <ErrorMessage>{inputsError.password}</ErrorMessage>
      </Collapse>
      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
        textHoverColor={colors.white}
        onClick={handleSubmit}
      >
        Iniciar session
      </Button>
      <Spacer height="1em" />
    </FormElement>
  );
}

Form.propTypes = {
  onSubmit: func.isRequired,
  onAnyInputChange: func.isRequired,
  inputValues: object.isRequired,
};

const FormElement = styled.form`
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
