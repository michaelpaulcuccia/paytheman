import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 1em;
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

    @media (max-width: 500px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 0.5em;
    font-size: 14px;
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

  @media (max-width: 500px) {
    height: 3.5em;
  }

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

    span {
      @media (max-width: 605px) {
        display: none;
      }
    }

    @media (max-width: 500px) {
      text-align: left;
      padding-right: 0;
      font-size: 1.1em;
    }
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

    @media (max-width: 500px) {
      margin-left: 10px;
    }
  }

  .label {
    position: absolute;
    top: 40%;
    left: 0.5em;
    transform: translateX(0%) translateY(-50%);
    z-index: 1;
    color: #fff;
    font-weight: 600;

    @media (max-width: 500px) {
      left: 1em;
      font-size: 0.8em;
    }
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
              {label}: <span>{number}</span>
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
