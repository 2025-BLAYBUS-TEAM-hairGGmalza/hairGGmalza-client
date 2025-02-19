"use client";

import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import CategoryBtn from "../common/CategoryBtn";
import { Designer, MeetingRequest } from "@/types/request";
import { filterDesigner } from "@/apis/filter";

interface CategorySelectorProps {
  categories: string[];
  Icon: ReactNode;
  setDesigners: (designers: Designer[]) => void;
}

// const categoryToRegionMap: Record<string, number | null> = {
//   서울전체: 0,
//   "홍대/연남/합정": 1,
//   "강남/청담/압구정": 2,
//   "성수/건대": 3,
// } as const;

const majorKeywords = ["컷", "펌", "염색", "탈염색"];

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  Icon,
  setDesigners,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = async (category: string) => {
    setSelectedCategory(category); // ✅ 선택된 카테고리 변경

    const isMajorCategory = majorKeywords.some((major) =>
      category.includes(major)
    );

    const body: MeetingRequest = {
      meetingType: null,
      region:
        category === "서울전체"
          ? 0
          : category === "홍대/연남/합정"
          ? 1
          : category === "강남/청담/압구정"
          ? 2
          : category === "성수/건대"
          ? 3
          : null,

      minPrice: null,
      maxPrice: null,
      majors: isMajorCategory ? [category] : null, // ✅ major 카테고리일 경우 majors 설정
    };

    try {
      const response = await filterDesigner(body);
      console.log(response.data.designerInfos);
      setDesigners(response.data.designerInfos);
    } catch (error) {
      console.error("Failed to fetch designers:", error);
    }
  };

  return (
    <Container>
      {categories.map((category) => (
        <CategoryBtn
          key={category}
          category={category}
          selected={selectedCategory === category}
          onClick={() => handleCategoryClick(category)}
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
