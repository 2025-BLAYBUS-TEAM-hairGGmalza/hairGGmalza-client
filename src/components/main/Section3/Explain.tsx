"use client";

import React from "react";
import styled from "styled-components";

const Explain = () => {
  return (
    <TitleWrapper>
      <Title>나만의 스타일을 찾아보세요</Title>
      <Subtitle>후기가 보장하는 완벽 맞춤 헤어 컨설팅</Subtitle>
    </TitleWrapper>
  );
};

export default Explain;

const TitleWrapper = styled.div`
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
