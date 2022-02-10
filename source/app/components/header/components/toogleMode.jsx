import { DarkMode, LightMode } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setTheme } from 'app/redux/meta';
import { colors } from 'app/theme/values';
import Spacer from 'app/components/spacer';
import Text from 'app/components/text';

function ToogleMode() {
  const theme = useSelector((state) => state.meta.theme);
  const dispatch = useDispatch();

  const handleDarkClick = () => dispatch(setTheme('light'));
  const handleLightClick = () => dispatch(setTheme('dark'));

  return (
    <Wrapper>
      {theme === 'light' && (
        <>
          <Icon as={LightMode} onClick={handleLightClick} />
          <Spacer width="1em" />
          <Text color={colors.white}>Light</Text>
        </>
      )}
      {theme === 'dark' && (
        <>
          <Icon as={DarkMode} onClick={handleDarkClick} />
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
