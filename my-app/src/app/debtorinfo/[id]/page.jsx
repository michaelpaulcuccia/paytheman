"use client";
import React from "react";
import { usePathname } from "next/navigation";
import DebtorInfoView from "../../../../components/DebtorInfoView";

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/debtorinfo/")[1];

  return (
    <>
      <DebtorInfoView itemID={itemID} />
    </>
  );
}
