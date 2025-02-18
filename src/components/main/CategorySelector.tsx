"use client";

import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import CategoryBtn from "../common/CategoryBtn";

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
        <CategoryBtn
          key={category}
          category={category}
          selected={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
          Icon={Icon}
        />
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
