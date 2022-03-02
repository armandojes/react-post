import React from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import { func, object } from 'prop-types';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';
import Button from 'app/components/button';
import { Collapse } from '@mui/material';

function Form({ inputValues, onInputChange, onClick, inputsWithError, onRemoveError }) {
  const handleInputChange = (event) => {
    onInputChange(event.target.name, event.target.value);
  };

  const handleInputFocus = (event) => {
    if (inputsWithError[event.target.name]) {
      onRemoveError(event.target.name);
    }
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
        error={!!inputsWithError.email}
        value={inputValues.email || ''}
        name="email"
        onChange={handleInputChange}
      />
      <Collapse in={!!inputsWithError.email}>
        <ErrorMessage>{inputsWithError.email}</ErrorMessage>
      </Collapse>
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!inputsWithError.password}
        value={inputValues.password || ''}
        onChange={handleInputChange}
        name="password"
      />
      <Collapse in={!!inputsWithError.password}>
        <ErrorMessage>{inputsWithError.password}</ErrorMessage>
      </Collapse>
      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
        onClick={onClick}
        textHoverColor={colors.white}
      >
        Iniciar session
      </Button>
      <Spacer height="1em" />
    </FormElement>
  );
}

Form.propTypes = {
  onClick: func,
  inputValues: object,
  inputsWithError: object,
  onRemoveError: func,
  onInputChange: func,
};

Form.defaultProps = {
  onInputChange: () => {},
  onClick: () => {},
  onRemoveError: () => {},
  inputValues: {},
  inputsWithError: {},
};

const FormElement = styled.div`
  padding: 2em;
  border: 1px solid ${colors.gray};
  box-shadow: 5px 5px 10px ${colors.gray};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.3em;
`;

export default Form;
