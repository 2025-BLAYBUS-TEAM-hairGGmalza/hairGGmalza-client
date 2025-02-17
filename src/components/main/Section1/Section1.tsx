"use client";

import React from "react";
import MarqueeText from "../MarqueeText";
import ProgressCarousel from "../../common/carousel/ProgressCarousel";

const images = [
  { src: "/images/Haertz Branding-10.png", alt: "Image 1" },
  { src: "/images/Haertz Branding-11.png", alt: "Image 2" },
  { src: "/images/Haertz Branding-12.png", alt: "Image 3" },
  { src: "/images/Haertz Branding-13.png", alt: "Image 4" },
];

const Section1 = () => {
  return (
    <>
      <MarqueeText />
      <ProgressCarousel images={images} />
    </>
  );
};

export default Section1;
