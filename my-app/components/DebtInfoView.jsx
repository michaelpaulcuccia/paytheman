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
import { TwoCols, Tab, AltTab } from "./Atoms";

const Root = styled.div`
  background: #f0f0f0;
  padding: 20px;
`;

const OutputRoot = styled.div`
  margin-bottom: 32px;
`;

export default function DebtInfoView({ data }) {
  const {
    debtor: { contactWith, dateOfOriginalDebt },
  } = data;

  return (
    <>
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
          <span>Amount Originally Owed:</span>$
          {data.debtor.amountOriginallyOwed}
        </Tab>
        <Tab>
          <div className="icon-container">
            <FaCalendarCheck />
          </div>
          <span>Date of Original Debt:</span> {dateOfOriginalDebt}
        </Tab>

        <br />
        <br />
        {contactWith.map((contact, i) => (
          <OutputRoot key={i}>
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

            <TwoCols>
              <AltTab>
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
              </AltTab>
              <AltTab>
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
              </AltTab>
            </TwoCols>

            <Tab>
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
    </>
  );
}
