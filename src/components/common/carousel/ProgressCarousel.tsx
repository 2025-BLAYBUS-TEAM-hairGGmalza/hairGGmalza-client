"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import { useState } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const ProgressCarousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <CarouselContainer>
      <BannerSection>
        <Swiper
          style={{ width: "100%", height: "auto" }}
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
                  layout="intrinsic"
                  width={800}
                  height={800}
                />
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>

        <ProgressBarContainer>
          <ProgressBar $progress={((currentIndex + 1) / images.length) * 100} />
        </ProgressBarContainer>
      </BannerSection>
    </CarouselContainer>
  );
};

export default ProgressCarousel;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BannerSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ProgressBarContainer = styled.div`
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

const ProgressBar = styled.div<{ $progress: number }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background: black;
  transition: width 0.5s ease-in-out;
`;
