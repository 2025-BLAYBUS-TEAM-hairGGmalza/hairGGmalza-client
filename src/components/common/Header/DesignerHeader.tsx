"use client";

import React from "react";
import styled from "styled-components";
import StyledFichevronLeft from "./StyledFichevronLeft";

const DesignerHeader = ({ text }: { text: string }) => {
  return (
    <DesignerWrapper>
      <StyledFichevronLeft />
      <div style={{ fontSize: "2rem", fontWeight: 600 }}>{text}</div>
      <EmptyDiv className="emptyDiv" />
    </DesignerWrapper>
  );
};

export default DesignerHeader;

const DesignerWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmptyDiv = styled.div`
  width: 20px;
`;
