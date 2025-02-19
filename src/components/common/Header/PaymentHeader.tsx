"use client";

import React from "react";
import StyledFichevronLeft from "./StyledFichevronLeft";
import { GrHomeRounded } from "react-icons/gr";
import useNavigateTo from "@/hooks/useNavigateTo";

const PaymentHeader = ({ text }: { text: string }) => {
  const navigate = useNavigateTo("/");
  return (
    <>
      <StyledFichevronLeft />
      <div style={{ fontSize: "2rem", fontWeight: 600 }}>{text}</div>
      <GrHomeRounded
        cursor="pointer"
        size="2.6rem"
        margin-right="2rem"
        onClick={navigate}
      />
    </>
  );
};

export default PaymentHeader;
