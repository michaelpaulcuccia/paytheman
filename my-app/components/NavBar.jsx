"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled.div`
  padding: 8px 0px;
  margin-bottom: 18px;
`;

export default function NavBar() {
  return (
    <Root>
      <Link href="/">Home</Link>
    </Root>
  );
}
