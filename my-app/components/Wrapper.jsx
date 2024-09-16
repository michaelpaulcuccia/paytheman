import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 18px;
  padding: 40px;
  position: relative;

  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 8px;
  }

  &::before {
    content: "";
    //flex: 1;
    background: transparent;
  }
`;

const Child = styled.div`
  flex: 1; /* Allows children to grow and shrink equally */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
`;

export default function Wrapper({ children }) {
  return (
    <Root>
      {React.Children.map(children, (child) => (
        <Child>{child}</Child>
      ))}
    </Root>
  );
}
