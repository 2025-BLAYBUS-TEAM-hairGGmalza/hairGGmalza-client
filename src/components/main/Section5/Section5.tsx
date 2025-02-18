"use client";

import React from "react";
import Explain from "../Explain";
import CategorySelector from "../CategorySelector";
import { FaMapMarkerAlt } from "react-icons/fa";
import CarouselWrapper from "../CarouselWrapper";
import DesignerCarousel from "@/components/common/carousel/DesignerCarousel";

const categories = [
  "서울전체",
  "홍대/연남/합정",
  "강남/청담/압구정",
  "신촌/이대/혜화",
];

const images = [
  { src: "/images/hairmodel.png", alt: "Image 1" },
  { src: "/images/hairmodel.png", alt: "Image 2" },
  { src: "/images/hairmodel.png", alt: "Image 3" },
  { src: "/images/hairmodel.png", alt: "Image 4" },
];

const Section5 = () => {
  return (
    <>
      <Explain
        title={"나와 가까운 디자이너는?"}
        subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
      />
      <CategorySelector categories={categories} Icon={<FaMapMarkerAlt />} />
      <CarouselWrapper>
        <DesignerCarousel designers={images} />
      </CarouselWrapper>
    </>
  );
};

export default Section5;
