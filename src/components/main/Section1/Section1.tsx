"use client";

import React from "react";
import ProgressCarousel from "../../common/carousel/ProgressCarousel";
import MarqueeText from "./MarqueeText";

const images = [
  { src: "/images/banner/1.jpg", alt: "Image 1", height: 300 },
  { src: "/images/banner/2.jpg", alt: "Image 2", height: 300 },
  { src: "/images/banner/3.jpg", alt: "Image 3", height: 300 },
  { src: "/images/banner/4.jpg", alt: "Image 4", height: 300 },
];

const Section1 = () => {
  return (
    <>
      <MarqueeText />
      <ProgressCarousel images={images} main={true} />
    </>
  );
};

export default Section1;
