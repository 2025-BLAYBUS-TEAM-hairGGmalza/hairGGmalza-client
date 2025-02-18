"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface FilterBtnProps {
  onClick: () => void;
  Icon: ReactNode;
}

const FilterBtn: React.FC<FilterBtnProps> = ({ onClick, Icon }) => {
  return (
    <Button onClick={onClick}>
      <IconWrapper>{Icon}</IconWrapper>
      <span>필터링</span>
    </Button>
  );
};

export default FilterBtn;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  background-color: #f3d7e5;
  color: black;
`;

const IconWrapper = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    stroke: currentColor;
  }
`;
