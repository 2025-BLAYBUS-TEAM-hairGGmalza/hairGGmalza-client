"use client";

import React from "react";
import styled from "styled-components";
import StyledFichevronLeft from "./StyledFichevronLeft";

const DesignerHeader = ({ text }: { text: string }) => {
  return (
    <>
      <StyledFichevronLeft />
      <div style={{ fontSize: "2rem", fontWeight: 600 }}>{text}</div>
      <EmptyDiv className="emptyDiv" />
    </>
  );
};

export default DesignerHeader;

const EmptyDiv = styled.div`
  width: 20px;
`;
