import { Skeleton } from '@mui/material';
import React from 'react';
import Spacer from '../../../components/spacer';

function PostDetailSKeleton() {
  return (
    <div>
      <Skeleton height="10em" width="10em" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Spacer height="2em" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Spacer height="2em" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="100%" />
      <Skeleton height="1.5em" width="70%" />
      <Skeleton height="1.5em" width="70%" />
    </div>
  );
}

export default PostDetailSKeleton;
