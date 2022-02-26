import React from 'react';
import Container from 'app/components/container';
import SearchBar from './searchbar';
import Post from './post';
import useIsomorphicState from '../../../../react-fetch-ssr/useIsomorphicState';
import useIsomorphicFetch from '../../../../react-fetch-ssr/useIsomorphicFetch';
import api from '../../../../api';

function Posts() {
  const [state, setState] = useIsomorphicState([], 'postslist');

  useIsomorphicFetch(async () => {
    const response = await api.posts.getAll();
    setState(response.posts);
  });

  return (
    <Container>
      <SearchBar />

      {state.map((s) => (
        <Post
          key={s.id}
          title="an amazing post about react js"
          body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in"
        />
      ))}
    </Container>
  );
}

export default Posts;
