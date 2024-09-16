import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const Chart = styled.div`
  position: relative;
  padding: 1em;
  border-radius: 5px;
  font-size: 16px;

  &:after {
    content: "";
    position: absolute;
    left: 25%;
    top: 8.5%;
    transform: translateX(100%);
    width: 3px;
    background: #4c4c4c;
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
    color: #2f2f2f;
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
      <h2>Interpretation of Interactions:</h2>
      <Chart>
        {data.map(({ label, percent, color, number }, index) => (
          <Part key={index}>
            <div className="label">
              {label}: {number}
            </div>
            <div></div>
            <Bar percent={percent} color={color}>
              <div className="label">{percent}%</div>
            </Bar>
          </Part>
        ))}
      </Chart>
    </Container>
  );
}
