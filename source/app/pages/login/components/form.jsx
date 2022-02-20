import React from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import { func, object, string } from 'prop-types';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';
import Button from 'app/components/button';

function Form({ values, errors, onInputChange, errorMessage }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  return (
    <FormElement>
      <Text size="1.2em" align="center">Iniciar session</Text>
      <Spacer height="2em" />
      {!!errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
      <Text>Correo electrónico</Text>
      <TextFiled
        autoComplete="off"
        name="email"
        error={!!errors.email || false}
        value={values.email || ''}
        onChange={handleInputChange}
      />
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled
        name="password"
        autoComplete="off"
        type="password"
        error={!!errors.password || false}
        value={values.password || ''}
        onChange={handleInputChange}
      />
      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
        type="submit"
      >
        Iniciar session
      </Button>
      <Spacer height="1em" />
    </FormElement>
  );
}

Form.propTypes = {
  errors: object,
  values: object,
  onInputChange: func,
  errorMessage: string,
};

Form.defaultProps = {
  errorMessage: null,
  errors: {},
  values: {},
  onInputChange: () => {},
};

const FormElement = styled.form`
  padding: 2em;
  border: 1px solid ${colors.gray};
  box-shadow: 5px 5px 10px ${colors.gray};
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ErrorMessage = styled(Text)`
  background-color: #ff9c9c;
  color: red;
  padding: .2em .5em;
  border-radius: .5em;
  margin-bottom: .5em;
`;

export default Form;
