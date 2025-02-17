import Header from "@/components/common/Header/Header";
import Section1 from "@/components/main/Section1/Section1";
import Section2 from "@/components/main/Section2/Section2";
import Section3 from "@/components/main/Section3/Section3";
import React from "react";

const page = () => {
  return (
    <>
      <Header where="main" />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default page;
