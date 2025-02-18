"use client";

import React from "react";
import Header from "@/components/common/Header/Header";
import Section1 from "@/components/main/Section1/Section1";
import Section2 from "@/components/main/Section2/Section2";
import Section3 from "@/components/main/Section3/Section3";
import styled from "styled-components";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Footer from "./Footer/Footer";
import Divider from "../common/Divider";

const Main = () => {
  return (
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
  );
};

export default Main;

const MainWrapper = styled.div`
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
