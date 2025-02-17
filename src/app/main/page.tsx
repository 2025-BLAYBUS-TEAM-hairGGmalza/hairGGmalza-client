"use client";

import { sendCode } from "@/apis/apiTest";
import Header from "@/components/common/Header/Header";
import Section1 from "@/components/main/Section1/Section1";
import React, { useEffect } from "react";

const Mainpage = () => {
  useEffect(() => {
    //url에서 인가코드 받아오기
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    console.log("code:", code);

    //인가코드가 있으면 서버로 보내기
    if (code) {
      console.log("인가코드 있음");
      sendCode(code);
    }
    else {
      console.log("인가코드 없음");
    }
  }, []);

  return (
    <>
      <Header where="main" />
      <Section1 />
    </>
  );
};

export default Mainpage;
