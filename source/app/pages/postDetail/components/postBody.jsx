/* eslint-disable no-unused-vars */
import MarkdownIt from 'markdown-it';
import { string } from 'prop-types';
import React from 'react';
import highlightjs from 'markdown-it-highlightjs';
import styled from 'styled-components';

function PostBody({ content }) {
  const markdown = new MarkdownIt();
  markdown.use(highlightjs);
  const html = markdown.render(content);

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  );
}

PostBody.propTypes = {
  content: string.isRequired,
};

const Wrapper = styled.div`
  line-height: 2em;
`;

export default PostBody;
