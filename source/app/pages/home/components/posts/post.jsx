import PropTypes, { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import Text from "app/components/text";
import { colors } from "app/theme/values";
import { Link } from "react-router-dom";

function Post({ title, summary, url }) {
  return (
    <Wrapper>
      <Date>Febrero 09, 2022</Date>
      <Link to={`/post/${url}`}>
        <Text size="1.3em" bold>
          {title}
        </Text>
      </Link>
      <PostBody>{summary}</PostBody>
      <TagsWrapper>
        <Tag>React</Tag>
        <Tag>Redux</Tag>
        <Tag>Post</Tag>
        <Tag>SSR</Tag>
      </TagsWrapper>
    </Wrapper>
  );
}

Post.propTypes = {
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: string.isRequired,
};

const Wrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${colors.grayLight};
  padding: 1.5em 0em;
`;

const PostBody = styled(Text)`
  margin-top: 0.5em;
`;

const Date = styled.div`
  color: gray;
  font-size: inherit.9em;
  margin-bottom: 0.2em;
`;
const TagsWrapper = styled.div`
  display: flex;
  margin-top: 0.5em;
`;
const Tag = styled.div`
  margin-right: 1em;
  padding: 0.4em 1em;
  border-radius: 2em;
  background: ${colors.grayLight};
  :hover {
    background: ${colors.gray};
  }
`;

export default Post;
