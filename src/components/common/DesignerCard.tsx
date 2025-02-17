"use client";

import React from "react";
import styled from "styled-components";

const DesignerCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <CardWrapper>
      <Image src={src} alt={name} />
      <InfoWrapper>
        <Icon>👜</Icon>
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
  gap: 8px;
  background: white;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Icon = styled.span`
  font-size: 16px;
`;

const Name = styled.span`
  color: black;
`;
