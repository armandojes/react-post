import React from 'react';
import { useParams } from 'react-router';
import api from '../../api';
import Container from '../../components/container';
import useIsomorphicFetch from '../../react-fetch-ssr/useIsomorphicFetch';
import useIsomorphicState from '../../react-fetch-ssr/useIsomorphicState';
import Skeleton from './components/skeleton';

function PostDetail() {
  const { postUrl } = useParams();
  const [state, , setPartialState] = useIsomorphicState('postDetail', {
    status: 'loading',
    data: null,
  });

  useIsomorphicFetch(async () => {
    const response = await api.posts.getByUrl(postUrl);
    if (response.error) setPartialState({ status: 'error' });
    else setPartialState({ data: response.post });
  });

  return (
    <Container>
      {state.status === 'loading' && <Skeleton />}
      {state.status === 'error' && <h1>ops some error ocurred</h1>}
      {state.status === 'loaded' && <h1>hello post data</h1>}
    </Container>
  );
}

export default PostDetail;
