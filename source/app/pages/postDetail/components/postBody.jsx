/* eslint-disable no-unused-vars */
import MarkdownIt from 'markdown-it';
import { string } from 'prop-types';
import React from 'react';
import Highlight from 'react-highlight';

function PostBody({ content }) {
  const markdown = new MarkdownIt();
  const html = markdown.render(content);

  return (
    <div>
      <Highlight innerHTML language="javascript">
        {`
          function () => ''
        `}
      </Highlight>
    </div>
  );
}

PostBody.propTypes = {
  content: string.isRequired,
};

export default PostBody;
