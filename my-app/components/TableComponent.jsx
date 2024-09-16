"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const TableContainer = styled.div`
  max-height: calc(
    10 * 3rem
  ); /* Assuming each row is approximately 3rem tall */
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  /* Horizontal scrollbar */
  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
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
  min-width: 1000px; /* Minimum width for horizontal scrolling */
`;

const Th = styled.th`
  padding: 8px;
  background-color: #b9b5b5;
  text-align: left;
  color: black;
  letter-spacing: 1px;
  font-size: 18px;
`;

const Td = styled.td`
  padding: 8px;
  text-align: left;
  white-space: nowrap;
`;

const Tr = styled.tr`
  background-color: ${({ $isEven }) => ($isEven ? "#ffffff" : "#b9b5b5")};
`;

const DebtsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DebtsListItem = styled.li`
  margin-bottom: 4px;
`;

const TableComponent = ({ data }) => {
  return (
    <TableContainer>
      <h2
        style={{
          color: "black",
          padding: "4px 0px 4px 8px",
        }}
      >
        Debtor Information:
      </h2>
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

export default TableComponent;
