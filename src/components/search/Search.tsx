"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../common/Header/Header";
import { FaFilter } from "react-icons/fa";
import FilterBtn from "./FilterBtn";
import FilterModal from "../filter/FilterModal";
import SearchCard from "./SearchCard";

interface Designer {
  designerId: number;
  name: string;
  region: string;
  address: string;
  profile: string;
  description: string;
  offlinePrice: number;
  onlinePrice: number;
  meetingType: string;
  majors: string[];
}

// 더미 데이터
const dummyDesigners: Designer[] = [
  {
    designerId: 2,
    name: "최재영",
    region: "홍대_연남_합정",
    address: "1",
    profile: "null",
    description: " ",
    offlinePrice: 45000,
    onlinePrice: 25000,
    meetingType: "BOTH",
    majors: [],
  },
  {
    designerId: 5,
    name: "박수빈",
    region: "홍대_연남_합정",
    address: "3",
    profile: "null",
    description: " ",
    offlinePrice: 40000,
    onlinePrice: 28000,
    meetingType: "BOTH",
    majors: [],
  },
];

const Search = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [designers] = useState<Designer[]>(dummyDesigners); // 더미 데이터 사용

  const handleApplyFilters = (filters: string[]) => {
    setSelectedFilters(filters);
    setIsFilterOpen(false);
  };

  return (
    <>
      <Header where="search" />
      <BtnWrapper>
        <FilterBtn Icon={<FaFilter />} onClick={() => setIsFilterOpen(true)} />
        {selectedFilters.map((filter, index) => (
          <Button key={index}>{filter}</Button>
        ))}
      </BtnWrapper>

      <SearchWrapper>
        <span>{designers.length.toLocaleString()}건</span>
        <CardList>
          {designers.map((designer) => (
            <SearchCard key={designer.designerId} {...designer} />
          ))}
        </CardList>
      </SearchWrapper>

      <FilterModal
        isBottomOpen={isFilterOpen}
        setIsBottomOpen={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};

export default Search;

const BtnWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  gap: 1rem;
  overflow-x: auto;
`;

const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;
  span {
    margin-left: 0.2rem;
    font-size: 1.5rem;
    color: #666;
    display: block;
    margin-bottom: 1rem;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.div`
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

  background-color: #eeeeee;
  color: #989898;
`;
