"use client";

import React from "react";
import Explain from "../Explain";
import ReviewsCarousel from "@/components/common/carousel/ReviewsCarousel";
import CarouselWrapper from "../CarouselWrapper";

const Section3 = () => {
  return (
    <>
      <Explain
        title={"나만의 스타일을 찾아보세요"}
        subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
      />
      <CarouselWrapper>
        <ReviewsCarousel />
      </CarouselWrapper>
    </>
  );
};

export default Section3;
