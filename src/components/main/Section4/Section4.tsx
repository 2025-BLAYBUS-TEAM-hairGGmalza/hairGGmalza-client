import React from "react";
import Explain from "../Explain";
import DesignerCarousel from "@/components/common/carousel/DesignerCarousel";
import CarouselWrapper from "../CarouselWrapper";
import CategorySelector from "../CategoryBtns";
import { TiScissors } from "react-icons/ti";

const images = [
  { src: "/images/hairmodel.png", alt: "Image 1" },
  { src: "/images/hairmodel.png", alt: "Image 2" },
  { src: "/images/hairmodel.png", alt: "Image 3" },
  { src: "/images/hairmodel.png", alt: "Image 4" },
];

const categories = ["컷", "펌", "염색", "탈염색"];

const Section4 = () => {
  return (
    <>
      <Explain
        title={"지금 나에게 필요한 것은?"}
        subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
      />
      <CategorySelector categories={categories} Icon={<TiScissors />} />
      <CarouselWrapper>
        <DesignerCarousel designers={images} />
      </CarouselWrapper>
    </>
  );
};

export default Section4;
