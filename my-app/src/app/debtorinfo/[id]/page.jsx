"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { TwoCols, Tab } from "../../../../components/Atoms";
import { data } from "../../../../data";
import { FaOrcid } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Root = styled.div`
  background: #f0f0f0;
  padding: 20px;
`;

export default function page() {
  const pathname = usePathname();
  const itemID = pathname.split("/debtorinfo/")[1];

  const debtor = data.find((obj) => obj.id === itemID);
  const { name, address } = debtor;

  return (
    <Root>
      Welcome to info about {itemID}
      <TwoCols>
        <Tab>
          <div className="icon-container">
            <FaOrcid />
          </div>
          <span>Debtor ID:</span>
          <p>
            {name.firstName} {name.middleName} {name.lastName}
          </p>
          {name.aliases.length !== 0 ? (
            name.aliases.map((item, i) => (
              <div style={{ marginLeft: "6px" }} key={i}>
                a/k/a: {item}
                {i < name.aliases.length - 1 && ","}
              </div>
            ))
          ) : (
            <></>
          )}
        </Tab>
        <Tab>
          <div className="icon-container">
            <FaHome />
          </div>
          <span>Address:</span>
          {address.street}, {address.city}, {address.state}, {address.zip}
        </Tab>
      </TwoCols>
    </Root>
  );
}
