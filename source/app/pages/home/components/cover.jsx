import React from 'react';
import styled from 'styled-components';
import Text from 'app/layout/text';
import { colors } from '../../../theme/values';
import Spacer from '../../../layout/spacer';

function Cover() {
  return (
    <Wrapper>
      <Text color={colors.blueLight} size="4em" bold>ReactJs</Text>
      <Spacer height="1em" />
      <Text color={colors.blueLight}>The best react comunity</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #282c34;
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blakLigth};
  box-sizing: border-box;
`;

export default Cover;
