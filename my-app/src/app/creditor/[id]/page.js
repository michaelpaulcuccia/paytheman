"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/creditor/")[1];
  const decodedName = decodeURIComponent(itemID);
  return <div>Welcome to info about {decodedName}</div>;
}
