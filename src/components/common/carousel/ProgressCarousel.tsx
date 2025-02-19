"use client";

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
                <ImageWrapper>
                  <img src={src} alt={alt} />
                </ImageWrapper>
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
  height: 350px; //suzzang: 이거 원래 300px 였다. 문제되면 수정
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 470px;
    height: fit-content;
  }
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
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
