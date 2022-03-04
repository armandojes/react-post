import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import parseMarkdown from 'app/helpers/parseMarkdown';

function PostBody({ content }) {
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
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
