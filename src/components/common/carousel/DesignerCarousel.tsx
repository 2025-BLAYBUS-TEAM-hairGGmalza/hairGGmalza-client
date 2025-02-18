"use client";

import React from "react";
import styled from "styled-components";
import DesignerCard from "../DesignerCard";

const DesignerCarousel = ({
  designers,
}: {
  designers: { src: string; alt: string }[];
}) => {
  return (
    <CarouselWrapper>
      {designers.map((designer, index) => (
        <DesignerCard key={index} src={designer.src} name={designer.alt} />
      ))}
    </CarouselWrapper>
  );
};

export default DesignerCarousel;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;
