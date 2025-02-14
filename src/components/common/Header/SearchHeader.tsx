import React from "react";
import StyledFichevronLeft from "./StyledFichevronLeft";
import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";

const SearchHeader = () => {
  return (
    <SearchWrapper>
      <StyledFichevronLeft />
      <SearchInput placeholder="검색어를 입력해주세요" />
      <MdOutlineSearch cursor="pointer" size="3.2rem" />
    </SearchWrapper>
  );
};

export default SearchHeader;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 77%;
  font-size: 1.5rem;
  border-radius: 1rem;
  background-color: #d9d9d9;
  border: none;
  padding: 1rem 1.2rem;
`;
