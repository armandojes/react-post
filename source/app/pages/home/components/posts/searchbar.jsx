import styled from 'styled-components';
import React from 'react';
import TextField from 'app/components/TextFiled';
import { colors } from 'app/theme/values';
import { Search } from '@mui/icons-material';

function SearchBar() {
  return (
    <Wrapper>
      <InputWrapper>
        <TextFieldStyled />
        <SearchButton>
          <Search />
        </SearchButton>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  justify-content: right;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  @media screen and (max-width:600px) {
    width: 100%
  }
`;

const SearchButton = styled.div`
  background: ${colors.blueLight};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0em .5em;
  cursor: pointer;
  svg {
    color: #fff;
    font-size: 1.7em;
  }
`;

const TextFieldStyled = styled(TextField)`
  width: 100%;
  border-radius: .3em .0em 0em .3em;
  border-color: ${colors.blueLight};
`;

export default SearchBar;
