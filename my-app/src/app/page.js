"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { data } from "../../data";

const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: #0004;
    visibility: hidden;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  min-width: 865px; /* Minimum width for horizontal scrolling */
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
  white-space: nowrap;
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
    <TableContainer>
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
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                            }}
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
    </TableContainer>
  );
};

export default Index;
