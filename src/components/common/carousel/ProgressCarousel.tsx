"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import { useState } from "react";

const images = [
  { src: "/file.svg", alt: "Image 1" },
  { src: "/globe.svg", alt: "Image 2" },
  { src: "/next.svg", alt: "Image 3" },
  { src: "/vercel.svg", alt: "Image 4" },
];

const ProgressCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <LandingSectionContainer>
      <BannerSection $loadingWidth={576} className="loading">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {images.map(({ src, alt }, index) => (
            <SwiperSlide key={index}>
              <SlideContainer>
                <Image
                  src={src}
                  alt={alt}
                  width={300}
                  height={300}
                  layout="intrinsic"
                />
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>

        <CustomProgressBarContainer>
          <CustomProgressBar
            $progress={((currentIndex + 1) / images.length) * 100}
          />
        </CustomProgressBarContainer>
      </BannerSection>
    </LandingSectionContainer>
  );
};

export default ProgressCarousel;

const LandingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const BannerSection = styled.div<{ $loadingWidth?: number }>`
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &.loading {
    width: 90%;
    height: ${(props) =>
      props.$loadingWidth && props.$loadingWidth >= 576
        ? `332.9px`
        : `490.8px`};
    background-color: #f0f0f0;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CustomProgressBarContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 6px;
  background: white;
  overflow: hidden;
  z-index: 1;
`;

const CustomProgressBar = styled.div<{ $progress: number }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background: black;
  transition: width 0.5s ease-in-out;
`;
