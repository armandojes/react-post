import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Spacer from '../../../components/spacer';

function PostDetailSKeleton() {
  return (
    <Wrapper>
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Spacer height="1.5em" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Spacer height="1.5em" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.7em" width="100%" />
      <Skeleton height="1.5em" width="70%" />
      <Skeleton height="1.5em" width="70%" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 3em;
  width: 80%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export default PostDetailSKeleton;
