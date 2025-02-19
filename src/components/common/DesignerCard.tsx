"use client";

import React from "react";
import styled from "styled-components";

const DesignerCard = ({
  src,
  name,
  onClick,
}: {
  src: string;
  name: string;
  onClick?: () => void;
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <Image src={src} alt={name} />
      <InfoWrapper>
        <Icon src="/images/de_ic.png" alt="아이콘" />
        <Name>{name}</Name>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default DesignerCard;

const CardWrapper = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Name = styled.div`
  color: black;
  font-size: 15px;
`;
