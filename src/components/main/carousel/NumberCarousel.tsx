"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

const images = [
  { src: "/file.svg", alt: "Image 1" },
  { src: "/globe.svg", alt: "Image 2" },
  { src: "/next.svg", alt: "Image 3" },
  { src: "/vercel.svg", alt: "Image 4" },
];

const NumberCarousel = () => {
  return (
    <LandingSectionContainer>
      <BannerSection $loadingWidth={576} className="loading">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            type: "fraction",
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
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

        <PaginationContainer className="custom-pagination">
          1/{images.length}
        </PaginationContainer>
      </BannerSection>
    </LandingSectionContainer>
  );
};

export default NumberCarousel;

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

const PaginationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;
