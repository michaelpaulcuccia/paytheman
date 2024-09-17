import React from "react";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  width: 100%;
  margin-inline: auto;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const BarChartContainer = styled.div`
  height: 10rem; //160px
  display: grid;
  grid-auto-flow: column;
  gap: 2%;
  align-items: end;
  padding-inline: 2%;
  padding-block: 1.5rem;
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 1.5rem 0;
    z-index: -1;
    background-image: repeating-linear-gradient(
      to top,
      transparent 0 calc(10% - 1px),
      black 0 10%
    );
    box-shadow: 0 1px 0 black;
    opacity: 0.25;
  }
`;

const BarItem = styled.div`
  height: ${(props) => `calc(1% * ${props.value})`};
  background-color: ${(props) => props.color || "#060606"};
  position: relative;
  animation: item-height 1s ease forwards;

  & > * {
    position: absolute;
    text-align: center;
  }

  & > .label {
    inset: 100% 0 auto 0;
  }

  & > .value {
    inset: auto 0 100% 0;
    margin-bottom: 3px;
  }

  @keyframes item-height {
    from {
      height: 0;
    }
  }
`;

const DataContainer = styled.div`
  margin-top: 4px;
`;

const AvgAmtOweContainer = styled.div`
  margin-top: 40px;
  @media (max-width: 500px) {
    margin-top: 56px;
  }
`;

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((acc, num) => acc + num, 0);
  const average = total / numbers.length;
  const formattedAverage = parseFloat(average.toFixed(2));
  return formattedAverage;
};

const VerticalBarChart = ({ data, amountsOwed }) => {
  const average = calculateAverage(amountsOwed);

  return (
    <ComponentWrapper>
      <h2>Data Related to Debt Amounts:</h2>
      <BarChartContainer>
        {data.map((item, index) => (
          <BarItem key={index} value={item.value} color={item.color}>
            <div className="label">
              <DataContainer>
                {item.label}
                <br />
                Total: {item.total}
              </DataContainer>
            </div>
            <div className="value">{item.value}%</div>
          </BarItem>
        ))}
      </BarChartContainer>
      <AvgAmtOweContainer>Average Amount Owed: ${average}</AvgAmtOweContainer>
    </ComponentWrapper>
  );
};

export default VerticalBarChart;
