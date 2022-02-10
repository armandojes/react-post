import React from 'react';
import Container from '../../components/container';
import Cover from './components/cover';
import PostsList from './components/postsList';
import SearchBar from './components/searchbar';

function Home() {
  return (
    <>
      <Cover />
      <Container>
        <SearchBar />
        <PostsList />
      </Container>
    </>
  );
}

export default Home;
