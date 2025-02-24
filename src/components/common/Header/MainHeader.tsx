"use client";

import React from "react";
import styled from "styled-components";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import useNavigateTo from "@/hooks/useNavigateTo";
import { MdLogout } from "react-icons/md";

const MainHeader = () => {
  const navigate1 = useNavigateTo("/search");
  const navigate2 = useNavigateTo("/alert");

  return (
    <MainWrapper>
      <LogoImg src="/Logo.png" />
      <SearchAndAlarm>
        <MdOutlineSearch cursor="pointer" size="3.2rem" onClick={navigate1} />
        <FaRegBell cursor="pointer" size="2.8rem" onClick={navigate2} />
        <MdLogout cursor="pointer" size="2.8rem" />

      </SearchAndAlarm>
    </MainWrapper>
  );
};

export default MainHeader;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const LogoImg = styled.img`
  height: 24px;
  cursor: pointer;
`;

const SearchAndAlarm = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  width: 100px;
  gap: 10px;`;
