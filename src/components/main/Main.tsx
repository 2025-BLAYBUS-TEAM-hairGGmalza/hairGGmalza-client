"use client";

import React, { useEffect } from "react";
import Header from "@/components/common/Header/Header";
import Section1 from "@/components/main/Section1/Section1";
import Section2 from "@/components/main/Section2/Section2";
import Section3 from "@/components/main/Section3/Section3";
import styled from "styled-components";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Footer from "./Footer/Footer";
import Divider from "../common/Divider";
import { sendCode } from "@/apis/loginAPI";
import Navbar from "../common/Navbar/Navbar";

const Main = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    //쿼리에 구글 인가코드가 있으면 백으로 전송
    if (window.location.search.includes("code")) {
      const code = new URLSearchParams(window.location.search).get("code");
      sendCode(code);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <MainWrapper>
        <Header where="main" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Divider />
        <Section4 />
        <Divider />
        <Section5 />
        <Footer />
      </MainWrapper>
      <Navbar />
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 70px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
