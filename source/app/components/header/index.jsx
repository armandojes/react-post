import React from 'react';
import styled from 'styled-components';
import logoSrc from 'app/assets/logo.png';
import { Link } from 'react-router-dom';
import Container from '../../layout/container';
import Text from '../../layout/text';

function Header() {
  return (
    <HeaderStyled>
      <Container disabledVerticalPadding>
        <HeaderBody>
          <LeftSection>
            <Logo src={logoSrc} />
            <MenuWrapper>
              <MenuItem to="/">
                <Text>Inicio</Text>
              </MenuItem>
              <MenuItem to="/about">
                <Text>
                  Acerca
                </Text>
              </MenuItem>
              <MenuItem to="/ssr">
                <Text>
                  SSR
                </Text>
              </MenuItem>
            </MenuWrapper>
          </LeftSection>
          <RightSection>
            <Text>DARKMODE</Text>
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
  background: #fff;
  border-bottom: 1px solid #cdcdcd;
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
