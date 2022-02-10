import React from 'react';
import styled from 'styled-components';
import logoSrc from 'app/assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import Container from '../container';
import Text from '../text';
import Responsive from '../hide';
import { colors } from '../../theme/values';

function Header() {
  return (
    <HeaderStyled>
      <Container disabledVerticalPadding>
        <HeaderBody>

          <Responsive rule="min-width:601px">
            <LeftSection>
              <Logo src={logoSrc} />
              <MenuWrapper>
                <MenuItem to="/">
                  <Text color={colors.white}>Inicio</Text>
                </MenuItem>
                <MenuItem to="/about">
                  <Text color={colors.white}>
                    Acerca
                  </Text>
                </MenuItem>
                <MenuItem to="/ssr">
                  <Text color={colors.white}>
                    SSR
                  </Text>
                </MenuItem>
              </MenuWrapper>
            </LeftSection>
          </Responsive>

          <Responsive rule="max-width:600px">
            <Menu />
          </Responsive>

          <RightSection>
            <Text color={colors.white}>DARKMODE</Text>
          </RightSection>
        </HeaderBody>
      </Container>
    </HeaderStyled>
  );
}

const HeaderBody = styled.div`
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStyled = styled.header`
  background: ${colors.dark};
  box-shadow: 0px 5px 5px #cdcdcd;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div``;

const Logo = styled.img`
  width: 3em;
`;

const MenuWrapper = styled.div`
  margin-left: 2em;
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  margin-right: 1em;
  color: initial;
`;

export default Header;
