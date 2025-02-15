"use client";

import { useEffect, ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   title: string; 
   children?: ReactNode; 
}

const BottomModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
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
            <Title>
               <span style={{fontSize:'20px', fontWeight:'bold', marginLeft:'10px'}}>{title}</span>
               <CloseButton onClick={onClose}>×</CloseButton>
            </Title>
            <ModalWrapper>{children}</ModalWrapper>
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
   font-family: "pretendard-regular", sans-serif;
   width: 100%;
   max-width: 470px;
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
`;

// 모달 제목
const Title = styled.div`
   width: 90%;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 15px;

   border-bottom: 1px solid #eee;
`;

// 닫기 버튼
const CloseButton = styled.button`
   align-self: flex-end;
   font-size: 30px;
   color: black;
   background: none;
   border: none;
   cursor: pointer;
   margin: 10px;
   padding: 0;
`;

export default BottomModal;
