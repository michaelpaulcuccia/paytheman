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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 12px;
  background: #f0f0f0;
`;

const OutputRoot = styled.div`
  margin-bottom: 32px;
`;

const PageFlex = styled.div`
  display: flex;
  //align-items: flex-start;
  gap: 18px;
  width: 80%;
`;

const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  flex-grow: 1; /* Ensure all tabs grow equally */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 20px 10px;
  background: white;
  margin: 12px 18px 12px 0;
  display: flex;
  align-items: center; /* Vertically align content */

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
      <PageFlex>
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
      </PageFlex>
      <PageFlex>
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
      </PageFlex>
      <br />
      {contactWith.map((contact, i) => (
        <OutputRoot key={i}>
          <PageFlex>
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
          </PageFlex>
          <PageFlex>
            <Tab>
              <div className="icon-container">
                <TbMessageShare />
              </div>
              <span>Messages to Debtor: </span>
              <ColFlex>
                {contact.messages.map((message, j) => (
                  <div key={j}>
                    {j + 1}: {message}
                  </div>
                ))}
              </ColFlex>
            </Tab>

            <Tab>
              <div className="icon-container">
                <TbMessageSearch />
              </div>
              <span>Messages from Debtor: </span>
              <ColFlex>
                {contact.response.map((res, k) => (
                  <div key={k}>
                    {k + 1}: {res}
                  </div>
                ))}
              </ColFlex>
            </Tab>
          </PageFlex>

          <Tab>
            <div className="icon-container">
              <MdSentimentNeutral />
            </div>
            <span>Sentiment:</span>
            {contact.sentiment}
          </Tab>
        </OutputRoot>
      ))}
    </Root>
  );
}
