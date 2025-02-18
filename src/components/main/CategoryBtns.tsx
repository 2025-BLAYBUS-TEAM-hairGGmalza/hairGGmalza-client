"use client";

import React, { useState, ReactNode } from "react";
import styled from "styled-components";

interface CategorySelectorProps {
  categories: string[];
  Icon: ReactNode;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  Icon,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Container>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          selected={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        >
          <IconWrapper>{Icon}</IconWrapper>
          <span>{category}</span>
        </CategoryButton>
      ))}
    </Container>
  );
};

export default CategorySelector;

const Container = styled.div`
  display: flex;
  padding: 0 14px;
  gap: 8px;
  margin-bottom: 10px;
  overflow-x: auto;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
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
`;
