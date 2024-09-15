"use client";
import React from "react";
import styled from "styled-components";
import { data } from "../../data";
import TableComponent from "../../components/TableComponent";
import AverageAmountOwed from "../../components/AverageAmountOwed";
import Sentiment from "../../components/Sentiments";

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

const Index = () => {
  return (
    <Root>
      <TableComponent data={data} />
      <AverageAmountOwed numbers={amountsOwed} />
      <Sentiment sentiments={sentiments} />
    </Root>
  );
};

export default Index;
