"use client";

import React from "react";
import styled from "styled-components";

const Explain = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleWrapper>
  );
};

export default Explain;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 1rem;
`;

const Title = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 1.8rem;
  color: #b5b5b5;
`;
