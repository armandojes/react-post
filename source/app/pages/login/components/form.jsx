import React from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import TextFiled from 'app/components/TextFiled';
import Spacer from '../../../components/spacer';
import Text from '../../../components/text';
import Button from '../../../components/button';

function Form() {
  return (
    <FormElement>
      <Text size="1.2em" align="center">Iniciar session</Text>
      <Spacer height="2em" />
      <Text>Correo electrónico</Text>
      <TextFiled autoComplete="off" />
      <Spacer height="1em" />
      <Text>contraseña</Text>
      <TextFiled autoComplete="off" type="password" />
      <Spacer height="1.5em" />
      <Button
        textAlign="center"
        backgrounColor={colors.blueLight}
        textColor={colors.white}
      >
        Iniciar session
      </Button>
      <Spacer height="1em" />
    </FormElement>
  );
}

const FormElement = styled.form`
  padding: 2em;
  border: 1px solid ${colors.gray};
  box-shadow: 5px 5px 10px ${colors.gray};
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export default Form;
