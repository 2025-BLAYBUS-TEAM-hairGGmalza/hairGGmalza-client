"use client";

import BottomModal from "@/components/BottomModal";
import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RegisterWrapper>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <BottomModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </RegisterWrapper>
  );
};

export default Home;

const RegisterWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
