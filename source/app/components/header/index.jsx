import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import logo from 'app/assets/logo.png';
import Container from '../container';
import Text from '../text';
import Responsive from '../hide';
import { colors } from '../../theme/values';
import ToogleMode from './components/toogleMode';
import { useSession } from '../../context/session';

function Header() {
  const { session, setSession } = useSession();

  const handleCloseSession = () => setSession(null);

  return (
    <HeaderStyled>
      <Container disabledVerticalPadding>
        <HeaderBody>
          <Responsive rule="min-width:601px">
            <LeftSection>
              <Logo src={logo} />
              <MenuWrapper>
                <MenuItem to="/">
                  <Text color={colors.white}>Inicio</Text>
                </MenuItem>
                <MenuItem to="/about">
                  <Text color={colors.white}>Acerca</Text>
                </MenuItem>
                <MenuItem to="/ssr">
                  <Text color={colors.white}>SSR</Text>
                </MenuItem>
                {!session && (
                  <MenuItem to="/login">
                    <Text color={colors.white}>Entrar</Text>
                  </MenuItem>
                )}
                {!!session && (
                  <MenuItem as="div" onClick={handleCloseSession}>
                    <Text color={colors.white}>Cerrar session</Text>
                  </MenuItem>
                )}
              </MenuWrapper>
            </LeftSection>
          </Responsive>

          <Responsive rule="max-width:600px">
            <Menu />
          </Responsive>

          <RightSection>
            <ToogleMode />
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
