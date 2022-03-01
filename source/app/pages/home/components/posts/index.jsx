import React from 'react';
import Container from 'app/components/container';
import useIsomorphicState from 'app/react-fetch-ssr/useIsomorphicState';
import useIsomorphicFetch from 'app/react-fetch-ssr/useIsomorphicFetch';
import api from 'app/api';
import Post from './post';
import SearchBar from './searchbar';

function Posts() {
  const [posts, setPosts] = useIsomorphicState([], 'postslist');

  useIsomorphicFetch(async () => {
    const response = await api.posts.getAll();
    setPosts(response.posts);
  });

  return (
    <Container>
      <SearchBar />

      {posts.map((currentPost) => (
        <Post
          key={currentPost.id}
          title={currentPost.title}
          summary={currentPost.summary}
          url={currentPost.url}
        />
      ))}
    </Container>
  );
}

export default Posts;
