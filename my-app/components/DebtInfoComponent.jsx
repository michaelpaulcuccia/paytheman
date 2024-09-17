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
import { MdSentimentNeutral } from "react-icons/md";

const Root = styled.div`
  background: #f0f0f0;
`;

const OutputRoot = styled.div`
  margin-bottom: 32px;
`;

const TwoCol = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Tab = styled.div`
  flex-grow: 1;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 20px 10px;
  background: white;
  margin: 12px;
  display: flex;
  align-items: center;
  width: 100%;

  .icon-container {
    margin-right: 18px;
  }

  span {
    color: #1d2125;
    font-weight: bold;
    margin-right: 4px;
  }
`;

const StyledTab = styled(Tab)`
  flex-direction: column;
  align-items: flex-start;

  .top-section {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .bottom-section {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default function DebtInfoComponent({ data }) {
  const {
    debtor: { contactWith, dateOfOriginalDebt },
  } = data;

  return (
    <Root>
      <TwoCol>
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
      </TwoCol>
      <TwoCol>
        <Tab>
          <div className="icon-container">
            <TbReportMoney />
          </div>
          <span>Amount Originally Owed:</span>$
          {data.debtor.amountOriginallyOwed}
        </Tab>
        <Tab>
          <div className="icon-container">
            <FaCalendarCheck />
          </div>
          <span>Date of Original Debt:</span> {dateOfOriginalDebt}
        </Tab>
      </TwoCol>
      <br />
      <br />
      {contactWith.map((contact, i) => (
        <OutputRoot key={i}>
          <TwoCol>
            <Tab>
              <div className="icon-container">
                <FaCalendarAlt />
              </div>
              <span>Date of Communication:</span>
              {contact.dateOfContact}
            </Tab>
            <Tab>
              <div className="icon-container">
                <FaMoneyBillWave />
              </div>
              <span>Current Offer:</span> ${contact.offer.amount} at{" "}
              {contact.offer.frequency}
            </Tab>
          </TwoCol>
          <TwoCol>
            <StyledTab>
              <div className="top-section">
                <div className="icon-container">
                  {" "}
                  <TbMessageShare />
                </div>
                <span>Messages to Debtor: </span>
              </div>
              <div className="bottom-section">
                {contact.messages.map((message, j) => (
                  <div key={j}>
                    {j + 1}: {message}
                  </div>
                ))}
              </div>
            </StyledTab>
            <StyledTab>
              <div className="top-section">
                <div className="icon-container">
                  {" "}
                  <TbMessageSearch />
                </div>
                <span>Messages from Debtor: </span>
              </div>
              <div className="bottom-section">
                {contact.response.map((res, k) => (
                  <div key={k}>
                    {k + 1}: {res}
                  </div>
                ))}
              </div>
            </StyledTab>
          </TwoCol>
          <Tab style={{ width: "48%" }}>
            <div className="icon-container">
              <MdSentimentNeutral />
            </div>
            <span>Sentiment:</span>
            {contact.sentiment}
          </Tab>
          <br />
        </OutputRoot>
      ))}
    </Root>
  );
}
