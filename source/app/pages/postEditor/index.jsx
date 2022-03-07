import useForm from 'app/hooks/useForm';
import React from 'react';
import PostEditorView from './view';

function PostEditor() {
  const { inputValues, updateFormValue } = useForm();

  return <PostEditorView onInputChange={updateFormValue} inputValues={inputValues} />;
}

export default PostEditor;
