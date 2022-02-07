import React from 'react';
import Container from 'app/layout/container';
import Cover from './components/cover';

function Home() {
  return (
    <>
      <Cover />
      <Container>
        <h1>hello home</h1>
      </Container>
    </>
  );
}

export default Home;
