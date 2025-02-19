"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import DesignerCard from "../DesignerCard";

const DesignerCarousel = ({
  designers,
}: {
  designers: { src: string; alt: string; name: string; id: number }[];
}) => {
  const router = useRouter(); // ✅ useRouter 사용

  const handleClick = (id: number) => {
    router.push(`/designer/${id}`); // ✅ 클릭 시 이동
  };

  return (
    <CarouselWrapper>
      {designers.map((designer) => (
        <DesignerCard
          key={designer.id}
          src={designer.src}
          name={designer.name}
          onClick={() => handleClick(designer.id)} // ✅ 클릭 이벤트 추가
        />
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
