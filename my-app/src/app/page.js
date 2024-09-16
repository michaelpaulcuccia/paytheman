"use client";
import React from "react";
import styled from "styled-components";
import { data } from "../../data";
import TableComponent from "../../components/TableComponent";
import AverageAmountOwed from "../../components/AverageAmountOwed";
import Sentiment from "../../components/Sentiments";
import VerticalBarChart from "../../components/VerticalBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";

const Root = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

//AVERAGE AMOUNT
const extractAmountsOwed = (peopleArray) => {
  return peopleArray.flatMap((person) =>
    person.debts.map((debt) => debt.debtor.amountOriginallyOwed)
  );
};
const amountsOwed = extractAmountsOwed(data);

//SENTIMENT INFO
const extractSentiments = (peopleArray) => {
  return peopleArray.flatMap((person) =>
    person.debts.flatMap((debt) =>
      debt.debtor.contactWith.map((contact) => contact.sentiment)
    )
  );
};
const sentiments = extractSentiments(data);

//VERTICAL BAR CHART DATA
const verticalBarData = [
  { label: "Label 1", value: 80, color: "#5EB344" },
  { label: "Label 2", value: 50, color: "#FCB72A" },
  { label: "Label 3", value: 40, color: "#069CDB" },
  { label: "Label 4", value: 25, color: "#E0393E" },
];

//HORIZTONAL BAR CHART DATA
const horizontalBarData = [
  { label: "Yes", percent: 75, color: "#f22" }, // red
  { label: "No", percent: 25, color: "#56a" }, // blue
  { label: "Maybe", percent: 38, color: "#2a5" }, // green
];

const Index = () => {
  return (
    <Root>
      <TableComponent data={data} />
      <AverageAmountOwed numbers={amountsOwed} />
      <Sentiment sentiments={sentiments} />
      <VerticalBarChart data={verticalBarData} />
      <HorizontalBarChart data={horizontalBarData} />
    </Root>
  );
};

export default Index;

/*
In JavaScript, flatMap() is a method available on arrays that combines the functionality of map() and flat(). It first maps over each element in the array, applies a function to each element, and then flattens the resulting array by one level.

array.flatMap(callback(currentValue[, index[, array]])[, thisArg])

callback: The function that is executed for each element of the array. It can return an array or a single value.
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array on which flatMap() is called.
thisArg (optional): A value to use as this inside the callback function.

*******************************************************************************************************************************************

const numbers = [1, 2, 3, 4];

// Using flatMap to double the values and then flatten the result
const result = numbers.flatMap(x => [x, x * 2]);

console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

map() would return an array of arrays [[1, 2], [2, 4], [3, 6], [4, 8]].
flatMap() flattens this result by one level, producing [1, 2, 2, 4, 3, 6, 4, 8].
*/
