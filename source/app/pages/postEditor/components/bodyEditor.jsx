import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import parseMarkdown from '../../../helpers/parseMarkdown';

function BodyEditor() {
  function converterImage(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  const handler = async (f) => {
    const r = await converterImage(f);
    console.log(r);
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png';
  };

  return (
    <MdEditor style={{ minHeight: '700px' }} onImageUpload={handler} renderHTML={parseMarkdown} />
  );
}

export default BodyEditor;
