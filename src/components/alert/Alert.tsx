"use client";

import React from "react";
import Header from "../common/Header/Header";
import styled from "styled-components";
import { FaRegBellSlash } from "react-icons/fa";

const Alert = () => {
  return (
    <>
      <Header where="alert" />
      <Wrapper>
        <FaRegBellSlash size={80} />
        <Text>등록된 알림이 없습니다.</Text>
      </Wrapper>
    </>
  );
};

export default Alert;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
