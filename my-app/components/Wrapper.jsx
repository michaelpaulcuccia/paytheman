import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 24px;
  padding: 40px 20px;
`;

export default function Wrapper({ children }) {
  return <Root>{children}</Root>;
}
