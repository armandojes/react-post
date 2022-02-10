import React from 'react';
import styled from 'styled-components';
import Post from './post';

function PostsList() {
  return (
    <Wrapper>
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default PostsList;
