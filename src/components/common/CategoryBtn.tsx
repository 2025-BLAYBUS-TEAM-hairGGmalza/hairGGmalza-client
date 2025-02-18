"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface CategoryBtnProps {
  category: string;
  selected: boolean;
  onClick: () => void;
  Icon: ReactNode;
}

const CategoryBtn: React.FC<CategoryBtnProps> = ({
  category,
  selected,
  onClick,
  Icon,
}) => {
  return (
    <Button selected={selected} onClick={onClick}>
      <IconWrapper>{Icon}</IconWrapper>
      <span>{category}</span>
    </Button>
  );
};

export default CategoryBtn;

const Button = styled.button<{ selected: boolean }>`
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

  background-color: ${({ selected }) => (selected ? "#000" : "#f2f2f2")};
  color: ${({ selected }) => (selected ? "#ECC0D3" : "#A0A0A0")};
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
