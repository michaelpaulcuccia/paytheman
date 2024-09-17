"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/debtorinfo/")[1];
  return <div>Welcome to info about {itemID}</div>;
}
