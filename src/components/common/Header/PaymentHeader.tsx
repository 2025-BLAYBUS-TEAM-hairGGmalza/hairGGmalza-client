"use client";

import React from "react";
import StyledFichevronLeft from "./StyledFichevronLeft";
import { GrHomeRounded } from "react-icons/gr";

const PaymentHeader = ({ text }: { text: string }) => {
  return (
    <>
      <StyledFichevronLeft />
      <div style={{ fontSize: "2rem", fontWeight: 600 }}>{text}</div>
      <GrHomeRounded cursor="pointer" size="2.8rem" margin-right="2rem" />
    </>
  );
};

export default PaymentHeader;
