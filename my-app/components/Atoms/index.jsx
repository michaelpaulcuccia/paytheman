import React from "react";
import styled from "styled-components";

const StyledTwoCol = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export function TwoCols({ children }) {
  return <StyledTwoCol>{children}</StyledTwoCol>;
}

const StyledTab = styled.div`
  flex-grow: 1;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 20px 10px;
  background: white;
  margin: 12px;
  display: flex;
  align-items: center;
  width: 370px;

  @media (max-width: 800px) {
    width: 90%;
  }

  .icon-container {
    margin-right: 18px;
  }

  span {
    color: #1d2125;
    font-weight: bold;
    margin-right: 4px;
  }
`;

export function Tab({ children }) {
  return <StyledTab>{children}</StyledTab>;
}

const StyledAltTab = styled(StyledTab)`
  flex-direction: column;
  align-items: flex-start;

  .top-section {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .bottom-section {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export function AltTab({ children }) {
  return <StyledAltTab>{children}</StyledAltTab>;
}
