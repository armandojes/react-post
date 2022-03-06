import React from 'react';
import Container from 'app/components/container';
import Form from './components/form';
import useForm from '../../hooks/useForm';

function PostEditor() {
  const form = useForm({});

  return (
    <Container>
      <Form
        onRemoveInputError={form.removeInputError}
        onInputChange={form.updateFormValue}
        inputValues={form.inputValues}
        inputErrors={form.inputErrors}
        step={1}
      />
    </Container>
  );
}

export default PostEditor;
