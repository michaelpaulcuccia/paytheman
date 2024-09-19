"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { data } from "../../../../data";

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/debtorinfo/")[1];

  const debtor = data.find((obj) => obj.id === itemID);
  const { address } = debtor;
  console.log(address);

  return <div>Welcome to info about {itemID}</div>;
}
