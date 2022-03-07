import React from 'react';
import Container from 'app/components/container';
import { func, object } from 'prop-types';
import Form from './components/form';

function PostEditorView({ onInputChange, inputValues }) {
  return (
    <Container>
      <Form onInputChange={onInputChange} inputValues={inputValues} />
    </Container>
  );
}

PostEditorView.propTypes = {
  onInputChange: func.isRequired,
  inputValues: object.isRequired,
};

export default PostEditorView;
