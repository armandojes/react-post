import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import { func, object } from 'prop-types';
import parseMarkdown from '../../../helpers/parseMarkdown';

function BodyEditor({ onAnyInputChange, inputValues }) {
  const formatImage = (imageAsFile) => {
    const temporaryUrl = URL.createObjectURL(imageAsFile);
    const image = new File([imageAsFile], temporaryUrl, { type: imageAsFile.type });
    return { image, temporaryUrl };
  };

  const handleBodyChange = (richValue) => {
    onAnyInputChange('body', richValue.text);
  };

  const handleImagesChange = async (newImage) => {
    const prevImages = inputValues.images ? [...inputValues.images] : [];
    const formatedImage = formatImage(newImage);
    const composedImages = [...prevImages, formatedImage.image];
    onAnyInputChange('images', composedImages);
    console.log('formatedImage.temporaryUrl', formatedImage.temporaryUrl);
    return formatedImage.temporaryUrl;
  };

  return (
    <div>
      <MdEditor
        value={inputValues.body || ''}
        style={{ minHeight: '700px' }}
        onImageUpload={handleImagesChange}
        renderHTML={parseMarkdown}
        onChange={handleBodyChange}
      />
    </div>
  );
}

BodyEditor.propTypes = {
  onAnyInputChange: func.isRequired,
  inputValues: object.isRequired,
};

export default BodyEditor;
