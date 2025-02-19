"use client";

import styled from "styled-components"
import { useRouter } from "next/navigation";
import ReviewsCarousel from "./common/carousel/ReviewsCarousel";


const ReviewAndPortfolio = () => {
   const router = useRouter();

   const handleMoreReview = () => {
      const currentPath = window.location.pathname; // 현재 페이지 경로 가져오기
      router.push(`${currentPath}/review`); // 현재 경로 뒤에 '/review' 추가
      console.log('리뷰 더보기:', `${currentPath}/review`);
   };
   

   return (
      <Wrapper>
         <Title>리뷰 <span onClick={handleMoreReview} style={{cursor:'pointer', textDecoration:'underline', color:'var(--gray-500, #7C7C7C)'}}>리뷰 더보기</span></Title>
         <ReviewsCarousel />

         <Title>포트폴리오</Title>
         <PortfolioImage />
      </Wrapper>
   )
}

export default ReviewAndPortfolio

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`

const Title = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 20px;
   font-size: 16px;
   margin-bottom: 15px;
`

const PortfolioImage = styled.div`
   width: 100%;
   height: 500px;
   background-image: url('/images/hairmodel.png');
   background-size: cover;
   background-position: center;
   background-color: #f0f0f0;
   margin-bottom: 20px;
`