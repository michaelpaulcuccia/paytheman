"use client";
import React from "react";
import { data } from "../../data";
import Wrapper from "../../components/Wrapper";
import TableComponent from "../../components/TableComponent";
import VerticalBarChart from "../../components/VerticalBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";

//AMOUNTS
const extractAmountsOwed = (peopleArray) => {
  return peopleArray.flatMap((person) =>
    person.debts.map((debt) => debt.debtor.amountOriginallyOwed)
  );
};
const amountsOwed = extractAmountsOwed(data);

//CONSTANT TO BE RESUSED
const totalCountOfAmounts = amountsOwed.length;
// Count values in each range
const count1000OrLess = amountsOwed.filter((value) => value <= 1000).length;
const count1001To5000 = amountsOwed.filter(
  (value) => value >= 1001 && value <= 5000
).length;
const count5001To10000 = amountsOwed.filter(
  (value) => value >= 5001 && value <= 10000
).length;
const count10001OrMore = amountsOwed.filter((value) => value >= 10001).length;
// Calculate percentages
const percent1000OrLess = Math.round(
  (count1000OrLess / totalCountOfAmounts) * 100
);
const percent1001To5000 = Math.round(
  (count1001To5000 / totalCountOfAmounts) * 100
);
const percent5001To10000 = Math.round(
  (count5001To10000 / totalCountOfAmounts) * 100
);
const percent10001OrMore = Math.round(
  (count10001OrMore / totalCountOfAmounts) * 100
);

//VERTICAL BAR CHART DATA
const verticalBarData = [
  {
    label: "up to $1,000",
    value: percent1000OrLess,
    color: "#5EB344",
    total: count1000OrLess,
  },
  {
    label: "$5,000 or less",
    value: percent1001To5000,
    color: "#FCB72A",
    total: count1001To5000,
  },
  {
    label: "up to $10,000",
    value: percent5001To10000,
    color: "#069CDB",
    total: count5001To10000,
  },
  {
    label: "10,000 or more",
    //value: percent10001OrMore,
    value: 100,
    color: "#E0393E",
    total: count10001OrMore,
  },
];

//SENTIMENT INFO
const extractSentiments = (peopleArray) => {
  return peopleArray.flatMap((person) =>
    person.debts.flatMap((debt) =>
      debt.debtor.contactWith.map((contact) => contact.sentiment)
    )
  );
};
const sentiments = extractSentiments(data);

//CONSTANT TO BE REUSED
const totalCount = sentiments.length;
//POSITIVE
const positiveCount = sentiments.filter(
  (sentiment) => sentiment === "positive"
).length;
const positivePercentage = Math.round((positiveCount / totalCount) * 100);
//NEGATIVE
const negativeCount = sentiments.filter(
  (sentiment) => sentiment === "negative"
).length;
const negativePercentage = Math.round((negativeCount / totalCount) * 100);
//NEUTRAL
const neutralCount = sentiments.filter(
  (sentiment) => sentiment === "neutral"
).length;
const neutralPercentage = Math.round((neutralCount / totalCount) * 100);
//CREATES NEW OBJECT
const horizontalBarData = [
  {
    label: "Positive",
    number: positiveCount,
    color: "#f22",
    percent: positivePercentage,
  },
  {
    label: "Negative",
    number: negativeCount,
    color: "#56a",
    percent: negativePercentage,
  },
  {
    label: "Neutral",
    number: neutralCount,
    color: "#2a5",
    percent: neutralPercentage,
  },
];

const Index = () => {
  return (
    <>
      <Wrapper>
        <TableComponent data={data} />
      </Wrapper>
      <Wrapper>
        <VerticalBarChart data={verticalBarData} amountsOwed={amountsOwed} />
        <HorizontalBarChart data={horizontalBarData} />
      </Wrapper>
    </>
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
