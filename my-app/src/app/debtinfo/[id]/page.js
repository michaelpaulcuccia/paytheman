"use client";
import React from "react";
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

  if (!debt) {
    return <div>Debt not found</div>;
  }

  return (
    <div>
      <h1>Debt Details</h1>
      <p>
        <strong>Debt ID:</strong> {debt.debtId}
      </p>
      <p>
        <strong>Company:</strong> {debt.debtor.company}
      </p>
      <p>
        <strong>Amount Originally Owed:</strong>{" "}
        {debt.debtor.amountOriginallyOwed}
      </p>
      <p>
        <strong>Date of Original Debt:</strong> {debt.debtor.dateOfOriginalDebt}
      </p>
    </div>
  );
}
