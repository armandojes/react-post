import React from 'react';
import styled from 'styled-components';
import Text from 'app/components/text';
import { colors } from '../../../theme/values';

function Post() {
  return (
    <Wrapper>
      <Date>Febrero 09, 2022</Date>
      <Text size="1.3em" bold>hola react</Text>
      <PostBody>
        Aunque parece algo muy difícil, gestionar la procrastinación es posible.
        Debes reconocer las razones por las cuales estás postergando algo.
        Puede ser incluso por miedo a no poder culminar una tarea o alcanzar un objetivo.s
      </PostBody>
      <TagsWrapper>
        <Tag>React</Tag>
        <Tag>Redux</Tag>
        <Tag>Post</Tag>
        <Tag>SSR</Tag>
      </TagsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${colors.grayLight};
  padding: 1.5em 0em;
`;

const PostBody = styled(Text)`
  margin-top: .5em;
`;

const Date = styled.div`
  color: gray;
  font-size: inherit.9em;
  margin-bottom: .2em;
`;
const TagsWrapper = styled.div`
  display: flex;
  margin-top: .5em;
`;
const Tag = styled.div`
  margin-right: 1em;
  padding: .4em 1em;
  border-radius: 2em;
  background: ${colors.grayLight};
  :hover {
    background: ${colors.gray};
  };
`;

export default Post;
