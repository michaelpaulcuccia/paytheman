"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { data } from "../../../../data";
import DebtInfoComponent from "../../../../components/DebtInfoComponent";

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
      <DebtInfoComponent data={debt} />
    </div>
  );
}
