import React from "react";

export default function Sentiment({ sentiments }) {
  const countSentiments = (arr) => {
    return arr.reduce(
      (acc, sentiment) => {
        acc[sentiment] = (acc[sentiment] || 0) + 1;
        return acc;
      },
      { positive: 0, negative: 0, neutral: 0 }
    );
  };

  const sentimentCounts = countSentiments(sentiments);

  return (
    <div>
      <h3>Sentiment Counts</h3>
      <p>Positive: {sentimentCounts.positive}</p>
      <p>Negative: {sentimentCounts.negative}</p>
      <p>Neutral: {sentimentCounts.neutral}</p>
    </div>
  );
}
