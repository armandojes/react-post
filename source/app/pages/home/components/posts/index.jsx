import React from 'react';
import Container from 'app/components/container';
import SearchBar from './searchbar';
import Post from './post';

function Posts() {
  return (
    <Container>
      <SearchBar />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
      <Post title="an amazing post about react js" body="he defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in" />
    </Container>
  );
}

export default Posts;
