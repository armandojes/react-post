import React from 'react';
import { useParams } from 'react-router';
import api from 'app/api';
import Container from 'app/components/container';
import useIsomorphicFetch from 'app/react-fetch-ssr/useIsomorphicFetch';
import useIsomorphicState from 'app/react-fetch-ssr/useIsomorphicState';
import Error404 from './components/error404';
import Skeleton from './components/skeleton';
import PostBody from './components/postBody';

function PostDetail() {
  const { postUrl } = useParams();
  const [state, , setPartialState] = useIsomorphicState('postDetail', {
    status: 'loading',
    data: null,
  });

  useIsomorphicFetch(async () => {
    const response = await api.posts.getByUrl(postUrl);
    if (response.error) setPartialState({ status: 'error' });
    else setPartialState({ data: response.post, status: 'loaded' });
  });

  return (
    <Container>
      {state.status === 'loading' && <Skeleton />}
      {state.status === 'error' && <Error404 />}
      {state.status === 'loaded' && <PostBody content={state.data.body} />}
    </Container>
  );
}

export default PostDetail;
