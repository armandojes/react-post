import { DarkMode, LightMode } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'app/theme/values';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';

function ToogleMode() {
  const theme = 'light';

  return (
    <Wrapper>
      {theme === 'light' && (
        <>
          <Icon as={LightMode} />
          <Spacer width="1em" />
          <Text color={colors.white}>Light</Text>
        </>
      )}
      {theme === 'dark' && (
        <>
          <Icon as={DarkMode} />
          <Spacer width="1em" />
          <Text color={colors.white}>Dark</Text>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const Icon = styled.div`
  color: ${colors.white};
  cursor: pointer;
`;

export default ToogleMode;
