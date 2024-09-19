"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { data } from "../../../../data";
import { TwoCols, Tab } from "../../../../components/Atoms";
import { IoIosBusiness } from "react-icons/io";

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/creditor/")[1];
  const decodedName = decodeURIComponent(itemID);

  const findDebtorByCompany = (data, companyName) => {
    return data.find((item) =>
      item.debts.some((debt) => debt.debtor.company === companyName)
    );
  };

  const debtor = findDebtorByCompany(data, decodedName);
  console.log(debtor);
  //TO DO: pass the debtID NOT the creditor name to page for easier search

  return (
    <div>
      <TwoCols>
        <Tab>
          <div className="icon-container">
            <IoIosBusiness />
          </div>
          <span>Company Name:</span>
          {decodedName}
        </Tab>
      </TwoCols>
    </div>
  );
}
