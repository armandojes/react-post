import styled from 'styled-components';
import { element, number, oneOfType, string } from 'prop-types';
import React from 'react';

function Responsive({ children, rule }) {
  return (
    <ResponsiveWrapper $rule={rule}>
      {children}
    </ResponsiveWrapper>
  );
}

Responsive.propTypes = {
  children: oneOfType([element, number, string]).isRequired,
  rule: string.isRequired,
};

const ResponsiveWrapper = styled.div`
  display: none;
  @media screen and (${(props) => props.$rule}) {
    display: initial;
  }
`;

export default Responsive;
