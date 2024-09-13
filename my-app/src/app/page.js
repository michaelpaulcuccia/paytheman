"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { data } from "../../data";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f4f4f4;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Tr = styled.tr`
  background-color: ${({ $isEven }) => ($isEven ? "#f9f9f9" : "white")};
`;

const DebtsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DebtsListItem = styled.li`
  margin-bottom: 4px;
`;

const Index = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Primary Email</Th>
          <Th>Primary Cell</Th>
          <Th>Debts</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, index) => (
          <Tr key={person.id} $isEven={index % 2 === 0}>
            <Td>
              {person.name.firstName}{" "}
              {person.name.middleName ? person.name.middleName + " " : ""}
              {person.name.lastName}
            </Td>
            <Td>{person.communication.email.primary}</Td>
            <Td>{person.communication.phone.cell}</Td>
            <Td>
              <DebtsList>
                {person.debts && person.debts.length > 0 ? (
                  person.debts.map((debt) => (
                    <DebtsListItem key={debt.debtId}>
                      <Link href={`/debtinfo/${debt.debtId}`}>
                        <p
                          style={{ color: "blue", textDecoration: "underline" }}
                        >
                          {debt.debtor.company}
                        </p>
                      </Link>
                    </DebtsListItem>
                  ))
                ) : (
                  <DebtsListItem>No debts</DebtsListItem>
                )}
              </DebtsList>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Index;
