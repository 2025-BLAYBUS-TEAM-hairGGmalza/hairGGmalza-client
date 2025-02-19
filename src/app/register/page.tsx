// "use client";

// // import BottomModal from "@/components/common/BottomModal";
// import CenterModal from "@/components/common/CenterModal";
// import FilterModal from "@/components/filter/FilterModal";
// import { useState } from "react";
// import styled from "styled-components";

// const Home = () => {
//   const [isBottomOpen, setIsBottomOpen] = useState(false);
//   const [isCenterOpen, setIsCenterOpen] = useState(false);

//   return (
//     <RegisterWrapper>
//       <Button onClick={() => setIsBottomOpen(true)}>하단 모달 열기</Button>
//       <Button onClick={() => setIsCenterOpen(true)}>중앙 모달 열기</Button>

//       {/* 하단 모달 */}
//       {/* <BottomModal isOpen={isBottomOpen} onClose={() => setIsBottomOpen(false)} title="모달 제목">
//         <p>bottomModal 내용 예시입니다.</p>
//         <div>dfdfdfdf</div>
//       </BottomModal> */}
//       <FilterModal
//         isBottomOpen={isBottomOpen}
//         setIsBottomOpen={() => setIsBottomOpen(false)}
//       />

//       {/* 중앙 모달 */}
//       <CenterModal isOpen={isCenterOpen} onClose={() => setIsCenterOpen(false)}>
//         <p>centerModal 내용 예시입니다.</p>
//         <div>dfdfdfdf</div>
//       </CenterModal>
//     </RegisterWrapper>
//   );
// };

// export default Home;

// const RegisterWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 16px;
//   height: 100vh;
// `;

// const Button = styled.button`
//   background: black;
//   color: white;
//   padding: 12px 20px;
//   font-size: 1rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.2s;

//   &:hover {
//     background: #222;
//   }
// `;
