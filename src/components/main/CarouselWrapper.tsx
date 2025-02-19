"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface CarouselWrapperProps {
  children: ReactNode;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CarouselWrapper;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  white-space: nowrap;
`;
