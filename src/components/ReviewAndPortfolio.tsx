"use client";

import styled from "styled-components";
import { useParams, useRouter } from "next/navigation";
import ReviewsCarousel from "./common/carousel/ReviewsCarousel";
import { useEffect, useState } from "react";
import { getDesignerReviews } from "@/apis/reviewAPI";
import { Review } from "@/types/request";

// ✅ API 응답 데이터 타입 정의
interface ReviewInfo {
   reviewId: number;
   reservationId: number;
   review: string;
   score: number;
   imageUrls: string[];
}

const ReviewAndPortfolio = () => {
   const designerId = String(useParams().id);
   const router = useRouter();

   const [reviews, setReviews] = useState<Review[]>([]);

   const handleMoreReview = () => {
      const currentPath = window.location.pathname; // 현재 페이지 경로 가져오기
      router.push(`${currentPath}/review`); // 현재 경로 뒤에 '/review' 추가
      console.log('리뷰 더보기:', `${currentPath}/review`);
   };
   
   useEffect(() => {
      console.log('디자이너 아이디:', designerId);

      // 리뷰 API 호출
      const fetchReviews = async () => {
         try {
            const data = await getDesignerReviews(designerId);
            if (data?.reviewInfos) {
               console.log("있다!!!");
               // API 응답 데이터를 Review[] 형태로 변환
               const formattedReviews = data.reviewInfos.map((review: ReviewInfo) => ({
                  image: review.imageUrls.length > 0 ? review.imageUrls[0] : "/default-image.jpg", // 첫 번째 이미지 사용, 없으면 기본 이미지
                  text: review.review,
                  point: review.score
               }));
               setReviews(formattedReviews);
            }
         } catch (error) {
            console.error("리뷰 데이터를 불러오는 중 오류 발생:", error);
         }
      };

      fetchReviews();
      console.log("리뷰들 세팅 확인!!!:", reviews);
   }, [designerId, reviews]);

   return (
      <Wrapper>
         <Title>
            리뷰 
            <span onClick={handleMoreReview} style={{cursor:'pointer', textDecoration:'underline', color:'var(--gray-500, #7C7C7C)'}}>
               리뷰 더보기
            </span>
         </Title>
         <ReviewsCarousel reviews={reviews} />

         <Title>포트폴리오</Title>
         <PortfolioImage />
      </Wrapper>
   );
};

export default ReviewAndPortfolio;

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