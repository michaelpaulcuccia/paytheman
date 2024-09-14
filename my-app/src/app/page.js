"use client";
import React from "react";
import TableComponent from "../../components/TableComponent";
import { data } from "../../data";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

const Index = () => {
  return (
    <Root>
      <TableComponent data={data} />
    </Root>
  );
};

export default Index;
