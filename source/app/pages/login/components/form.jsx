import React from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import { func, object, string } from 'prop-types';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';
import Button from 'app/components/button';
import ErrorMessage from '../../../components/errorMessage';

function Form({ inputValues, onInputChange, onClick, inputsWithError, onRemoveError, errorMessage }) {
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
      <Text size="1.2em" align="center">Iniciar session</Text>
      <Spacer height="2em" />
      <ErrorMessage message={errorMessage} />
      <Text>Correo electrónico</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!inputsWithError.email}
        value={inputValues.email || ''}
        name="email"
        onChange={handleInputChange}
      />
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled
        onFocus={handleInputFocus}
        error={!!inputsWithError.password}
        value={inputValues.password || ''}
        onChange={handleInputChange}
        name="password"
      />
      <Spacer height="1.5em" />

      <div>
        <input onChange={(e) => console.log('firs', e)} name="gender" type="radio" value="male" /> male
        <input onChange={(e) => console.log('second', e)} name="gender" type="radio" value="female" /> female
      </div>

      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
        onClick={onClick}
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
  errorMessage: string,
};

Form.defaultProps = {
  onInputChange: () => {},
  onClick: () => {},
  onRemoveError: () => {},
  inputValues: {},
  inputsWithError: {},
  errorMessage: null,
};

const FormElement = styled.div`
  padding: 2em;
  border: 1px solid ${colors.gray};
  box-shadow: 5px 5px 10px ${colors.gray};
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export default Form;
