"use client";

import { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const BottomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [isOpen]);

   if (!isOpen) return null;

   return (
      <ModalOverlay onClick={onClose}>
         <ModalContainer onClick={(e) => e.stopPropagation()}>
         <CloseButton onClick={onClose}>×</CloseButton>
            <ModalWrapper>
               여기에 내용을 넣어주세용~~(칸 크기 보라고 border 해놓음)
            </ModalWrapper>
         </ModalContainer>
      </ModalOverlay>
   );
};

// 모달 배경 (클릭 시 닫힘)
const ModalOverlay = styled.div`
      
   position: fixed;
   inset: 0;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: flex-end;
   z-index: 1000;
`;

// 모달 컨테이너 (슬라이드 애니메이션 포함)
const ModalContainer = styled.div`
   width: 100%;
   max-width: 490px;
   height: 75%;
   background: white;
   border-radius: 12px 12px 0 0;
   position: relative;
   transform: translateY(100%);
   animation: slideUp 0.3s forwards;

   @keyframes slideUp {
      from {
         transform: translateY(100%);
      }
      to {
         transform: translateY(0);
      }
   }

   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`;

const ModalWrapper = styled.div`
   width: 80%;
   padding: 20px;

   border: 1px solid black;
`;

// 닫기 버튼
const CloseButton = styled.button`
   width: 30px;
   align-self: flex-end;

   font-size: 20px;
   font-weight: bold;
   color: black;
   background: none;
   border: none;
   cursor: pointer;
   margin: 10px;
   padding: 0;

`;

export default BottomModal;
