import React from "react";

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((acc, num) => acc + num, 0);
  const average = total / numbers.length;
  const formattedAverage = parseFloat(average.toFixed(2));
  return formattedAverage;
};

export default function AverageAmountOwed({ numbers }) {
  const average = calculateAverage(numbers);

  return <div>Average Amount Owed: {average}</div>;
}
