import React from 'react';
import Container from 'app/layout/container';
import Cover from './components/cover';
import SearchBar from './components/searchbar';
import Posts from './components/posts';

function Home() {
  return (
    <>
      <Cover />
      <SearchBar />
      <Container>
        <Posts />
      </Container>
    </>
  );
}

export default Home;
