import React from 'react';
import Container from 'app/components/container';
import useForm from 'app/hooks/useForm';
import Form from './components/form';

function PostEditor() {
  const { inputValues, updateFormValue } = useForm();

  return (
    <Container>
      <Form onAnyInputChange={updateFormValue} inputValues={inputValues} />
    </Container>
  );
}

PostEditor.propTypes = {};

export default PostEditor;
