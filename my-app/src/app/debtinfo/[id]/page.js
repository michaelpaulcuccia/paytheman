"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "../../../../data";

const findDebtById = (debtId) => {
  for (const person of data) {
    const debt = person.debts.find((debt) => debt.debtId === debtId);
    if (debt) return debt;
  }
  return null;
};

export default function Page() {
  const pathname = usePathname();
  const itemID = pathname.split("/debtinfo/")[1];

  const debt = findDebtById(itemID);
  console.log(debt);

  if (!debt) {
    return <div>Debt not found</div>;
  }

  const { contactWith, dateOfOriginalDebt } = debt.debtor;
  const [{ offer }] = contactWith;

  return (
    <div>
      <h1>Debt Details</h1>
      <p>
        <strong>Debt ID:</strong> {debt.debtId}
      </p>
      <div>
        <strong>Company:</strong>
        <Link
          href={`/creditor/${debt.debtor.company}`}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {debt.debtor.company}
        </Link>
      </div>
      <p>
        <strong>Amount Originally Owed:</strong> $
        {debt.debtor.amountOriginallyOwed}
      </p>
      <p>
        <strong>Offer: </strong>${offer.amount} at {offer.frequency}
      </p>
      <p>
        <strong>Date of Original Debt:</strong> {dateOfOriginalDebt}
      </p>
      <br />
      <h3>Recent Communications</h3>
      <br />
      {contactWith.map((contact, i) => (
        <div key={i}>
          <p>
            <strong>Date of Last Contact:</strong> {contact.dateOfContact}
          </p>
          <p>
            <strong>Messages:</strong>
          </p>
          {contact.messages.map((message, j) => (
            <div key={j}>{message}</div>
          ))}
          <p>
            <strong>Sentiment:</strong> {contact.sentiment}
          </p>
          <div>
            <strong>Responses:</strong>
            {contact.response.map((res, k) => (
              <p key={k}>{res}</p>
            ))}
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
