import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: #fff;
  width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #222;
`;

const Chart = styled.div`
  position: relative;
  padding: 1em;
  background: #222;
  border-radius: 5px;
  font-size: 16px;

  &:after {
    content: "";
    position: absolute;
    left: 25%;
    top: 7.5%;
    transform: translateX(100%);
    width: 4px;
    background: #fff;
    height: 86%;
    border-radius: 2px;
  }
`;

const grow = keyframes`
  from {
    width: 0;
  }
`;

const Part = styled.div`
  display: flex;
  height: 3em;

  .label {
    flex: 1;
    flex-basis: 25%;
    text-align: right;
    padding-right: 1em;
    margin: 0.5em 0;
    height: 2em;
    line-height: 2em;
    color: #fff;
    font-weight: 600;
  }
`;

const Bar = styled.div`
  flex: 3;
  flex-basis: 75%;
  position: relative;
  margin: 0.5em 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 0 2px 2px 0;
    animation: ${grow} 0.5s;
    width: ${({ percent }) => percent}%;
    background: ${({ color }) => color};
  }

  .label {
    position: absolute;
    top: 50%;
    left: 0.5em;
    transform: translateX(0%) translateY(-50%);
    z-index: 1;
    color: #fff;
    font-weight: 600;
  }
`;

export default function HorizontalBarChart({ data }) {
  return (
    <Container>
      <Chart>
        {data.map(({ label, percent, color }, index) => (
          <Part key={index}>
            <div className="label">{label}</div>
            <Bar percent={percent} color={color}>
              <div className="label">{percent}%</div>
            </Bar>
          </Part>
        ))}
      </Chart>
    </Container>
  );
}
