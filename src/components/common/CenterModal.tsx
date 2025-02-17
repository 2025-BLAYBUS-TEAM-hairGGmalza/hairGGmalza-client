"use client";

import { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   title?: string;
   first?: string;
   second?: string;
   third?: string;
   children?: React.ReactNode;
}

const CenterModal: React.FC<ModalProps> = ({ isOpen, onClose, title, first, second, third }) => {
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
            {/* 제목이 있으면 렌더링
            {title && <ModalTitle>{title}</ModalTitle>} */}
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>
               <FirstRow>
                  {first}
               </FirstRow>
               <SecondRow>
                  {second}
               </SecondRow>
               <ThirdRow>
                  {third}
               </ThirdRow>
            </ModalContent>
            <ConfirmButton onClick={onClose}>확인했어요</ConfirmButton>
         </ModalContainer>
      </ModalOverlay>
   );
};

// 배경 (모달 외부 클릭 시 닫힘)
const ModalOverlay = styled.div`
   position: fixed;
   inset: 0;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000;
   animation: fadeIn 0.3s;

   @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
   }
`;

// 모달 박스
const ModalContainer = styled.div`
   width: 90%;
   max-width: 340px;
   background: white;
   text-align: center;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   animation: slideDown 0.3s;
   box-sizing: border-box;
   margin-top: -100px;

   @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
   }
`;

// 모달 제목
const ModalTitle = styled.div`
   font-size: 20px;
   font-weight: 1000;
   margin-top: 35px;
   margin-bottom: 10px;
`;

// 모달 내용
const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   align-self: stretch;
   justify-content: center;
   gap: 15px;
   padding: 20px 30px;
   white-space: pre-line; 
`;


// 확인 버튼
const ConfirmButton = styled.button`
   width: 100%;
   background: black;
   padding: 20px;
   font-size: 16px;
   border: none;
   cursor: pointer;
   color: var(--Chantilly-200, #F3D7E5);

   &:hover {
      background: #222;
   }
`;

const FirstRow = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   text-align: start;
`;

const SecondRow = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 14px;
   text-align: start;
`;

const ThirdRow = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 12px;
   text-align: start;
   color: var(--gray-400, #989898);

`;


export default CenterModal;

