import { array, bool, element, oneOfType, string } from "prop-types";
import React from "react";
import styled from "styled-components";

function Container({ children, disabledVerticalPadding, className }) {
  return (
    <Wrapper
      $disabledVerticalPadding={disabledVerticalPadding}
      className={className}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: ${(props) => (props.$disabledVerticalPadding ? "0px .5em" : ".5em")};
`;

Container.propTypes = {
  children: oneOfType([element, array]).isRequired,
  disabledVerticalPadding: bool,
  className: string,
};

Container.defaultProps = {
  disabledVerticalPadding: false,
  className: "",
};

export default Container;
