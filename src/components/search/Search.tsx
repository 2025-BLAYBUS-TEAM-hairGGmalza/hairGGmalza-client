"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../common/Header/Header";
import { FaFilter } from "react-icons/fa";
import FilterBtn from "./FilterBtn";
import FilterModal from "../filter/FilterModal";
import SearchCard from "./SearchCard";
import { Designer } from "@/types/request";

const Search = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [designers, setDesigners] = useState<Designer[]>([]); // 디자이너 리스트 상태

  const handleApplyFilters = (filters: string[]) => {
    setSelectedFilters(filters);
    setIsFilterOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <Wrapper>
      <Header where="search" />
      <BtnWrapper>
        <FilterBtn Icon={<FaFilter />} onClick={() => setIsFilterOpen(true)} />
        {selectedFilters.map((filter, index) => (
          <Button key={index}>{filter}</Button>
        ))}
      </BtnWrapper>

      {/* ✅ designers가 존재할 때만 렌더링 */}
      {designers && designers.length > 0 && (
        <SearchWrapper>
          <span>{designers.length.toLocaleString()}건</span>
          <CardList>
            {designers.map((designer) => (
              <SearchCard key={designer.designerId} {...designer} />
            ))}
          </CardList>
        </SearchWrapper>
      )}

      <FilterModal
        isBottomOpen={isFilterOpen}
        setIsBottomOpen={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        setDesigners={setDesigners}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

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
