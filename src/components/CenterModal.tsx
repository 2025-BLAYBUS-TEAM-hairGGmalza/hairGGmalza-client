"use client";

import { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const CenterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <ModalTitle>대면 컨설팅을 선택했어요</ModalTitle>
            <ModalContent>
               <p>대면 컨설팅을 선택하셨습니다.</p>
               <p>대면 컨설팅은 예약 시간에 방문하셔야 합니다.</p>
               <p>예약 시간에 방문하지 않을 경우, 예약이 취소될 수 있습니다.</p>
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
   width: 85%;
   max-width: 320px;
   background: white;
   text-align: center;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   animation: slideDown 0.3s;

   @keyframes slideDown {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
   }
`;

// 모달 제목
const ModalTitle = styled.h2`
   padding: 16px;
   font-size: 1.2rem;
   border-bottom: 1px solid #eee;
`;

// 모달 내용
const ModalContent = styled.div`
   padding: 16px;
   font-size: 1rem;
`;


// 확인 버튼
const ConfirmButton = styled.button`
   width: 100%;
   background: black;
   color: white;
   padding: 12px;
   font-size: 1.2rem;
   border: none;
   margin-top: 16px;
   cursor: pointer;

   &:hover {
      background: #222;
   }
`;

export default CenterModal;
