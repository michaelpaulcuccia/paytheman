import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaOrcid } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { TbMessageShare } from "react-icons/tb";
import { TbMessageSearch } from "react-icons/tb";

const Root = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OutputRoot = styled.div`
  margin-bottom: 24px;
`;

const CommsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  .comms-output {
    width: 50%;
    div {
      margin: 3px 0px;
    }
  }
`;

const Tab = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 20px 10px;
  margin: 12px 18px 12px 0;
  display: flex;
  min-width: 300px;

  .icon-container {
    margin-right: 18px;
  }

  span {
    color: #1d2125;
    font-weight: bold;
    margin-right: 4px;
  }
`;

export default function DebtInfoComponent({ data }) {
  const {
    debtor: { contactWith, dateOfOriginalDebt },
  } = data;

  return (
    <Root>
      <Tab>
        <div className="icon-container">
          <FaOrcid />
        </div>
        <span>Debt ID:</span>
        {data.debtId}
      </Tab>
      <Tab>
        <div className="icon-container">
          <IoIosBusiness />
        </div>
        <span>Company Name:</span>
        <Link
          href={`/creditor/${data.debtor.company}`}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {data.debtor.company}
        </Link>
      </Tab>
      <Tab>
        <div className="icon-container">
          <TbReportMoney />
        </div>
        <span>Amount Originally Owed:</span>${data.debtor.amountOriginallyOwed}
      </Tab>
      <Tab>
        <div className="icon-container">
          <FaCalendarCheck />
        </div>
        <span>Date of Original Debt:</span> {dateOfOriginalDebt}
      </Tab>
      <br />
      <br />
      <br />
      <Tab>
        <div className="icon-container">
          <FaCalendarAlt />
        </div>
        <span>Date of Communication:</span>
      </Tab>
      <Tab>
        <div className="icon-container">
          <FaMoneyBillWave />
        </div>
        <span>Current Offer:</span>
      </Tab>
      <Tab>
        <div className="icon-container">
          <TbMessageShare />
        </div>
        <span>Messages to Debtor: </span>
      </Tab>
      <Tab>
        <div className="icon-container">
          <TbMessageSearch />
        </div>
        <span>Messages from Debtor: </span>
      </Tab>
      <div>
        <br />
        <br />
        {contactWith.map((contact, i) => (
          <OutputRoot key={i}>
            <p>
              <strong>Date of Communication:</strong> {contact.dateOfContact}
            </p>
            <p>
              <strong>Current Offer: </strong> ${contact.offer.amount} at{" "}
              {contact.offer.frequency}
            </p>
            <CommsContainer>
              <div className="comms-output">
                <h3>Messages to Debtor</h3>
                {contact.messages.map((message, j) => (
                  <div key={j}>
                    {j + 1}: {message}
                  </div>
                ))}
              </div>
              <div className="comms-output">
                <h3>Responses from Debtor</h3>
                {contact.response.map((res, k) => (
                  <div key={k}>
                    {k + 1}: {res}
                  </div>
                ))}
              </div>
            </CommsContainer>

            <p>
              <strong>Sentiment:</strong> {contact.sentiment}
            </p>
          </OutputRoot>
        ))}
      </div>
    </Root>
  );
}
