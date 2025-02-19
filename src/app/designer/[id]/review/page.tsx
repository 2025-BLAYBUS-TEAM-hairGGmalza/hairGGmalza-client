'use client';

import Header from '@/components/common/Header/Header';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { getDesignerReviews } from '@/apis/reviewAPI';
import Image from 'next/image';

// ✅ API 응답 데이터 타입 (Review 타입 제거, ReviewInfo만 사용)
interface ReviewInfo {
   reviewId: number;
   reservationId: number;
   review: string;
   score: number;
   imageUrls: string[];
}

const Reviewpage = () => {
   const [isMounted, setIsMounted] = useState(false);
   const id = String(useParams().id); // URL 파라미터에서 id 가져오기
   const [reviews, setReviews] = useState<ReviewInfo[]>([]);
   const [averageScore, setAverageScore] = useState<number | null>(null);

   useEffect(() => {
      console.log(`디자이너 ID: ${id}`);

      // 리뷰 API 호출
      const fetchReviews = async () => {
         try {
            const response = await getDesignerReviews(id);
            const data = response.data;
            console.log("✅ 리뷰 데이터:", data);

            const reviewInfos = data?.reviewInfos || [];
            console.log("✅ 리뷰 리스트:", reviewInfos);

            if (reviewInfos.length > 0) {
               setReviews(reviewInfos);

               // 평균 평점 계산
               const totalScore = reviewInfos.reduce((sum, r) => sum + r.score, 0);
               setAverageScore(parseFloat((totalScore / reviewInfos.length).toFixed(1)));
            } else {
               setReviews([]);
               setAverageScore(null);
            }
         } catch (error) {
            console.error("❌ 리뷰 데이터를 불러오는 중 오류 발생:", error);
         }
      };

      fetchReviews();
   }, [id]);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   return (
      <Wrapper>
         <Header where='review' />

         <ProfileWrapper>
            <ProfileContainer>
               <TopProfile>
                  <ProfileImage />
                  <NameAndAddress>
                     <Name>디자이너 ({id}번)</Name>
                     <Address>
                        <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                        <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                     </Address>
                  </NameAndAddress>
               </TopProfile>
               <BottomProfile>   
                  <ScoreTitle>평균 평점</ScoreTitle>
                  <ScoreContainer>
                     <ScoreNumber>{averageScore !== null ? averageScore : "없음"}</ScoreNumber>
                     <ScoreStars>
                        {[...Array(5)].map((_, index) => (
                           index < Math.round(averageScore ?? 0) ? <GoStarFill key={index}/> : <GoStar key={index}/>
                        ))}
                     </ScoreStars>
                  </ScoreContainer>
               </BottomProfile>
            </ProfileContainer>
         </ProfileWrapper>

         <ReviewsContainer>
            <ReviewTitleContainer>
               <ReviewNumber>{reviews.length}개</ReviewNumber>
               <ReviewOrder>최근 등록 순</ReviewOrder>
            </ReviewTitleContainer>
            <ReviewContents>
               {reviews.length > 0 ? (
                  reviews.map((review: ReviewInfo) => (
                     <ReviewCard key={review.reviewId}>
                        <TopProfile>
                           <ProfileImage />
                           <NameAndAddress>  
                              <Name>{"익명"}</Name> {/* API에서 사용자 정보 없음 */}
                              <Address>
                                 <span id='address_detail' style={{marginRight:'10px'}}>이메일 없음</span>
                              </Address>
                           </NameAndAddress>
                        </TopProfile>
                        <RealReviewContainer>
                           <ReviewScore>
                              <ReviewScoreNumber>{review.score.toFixed(1)}</ReviewScoreNumber>
                              <ReviewScoreStars>
                                 {[...Array(5)].map((_, index) => (
                                    index < Math.round(review.score) ? <GoStarFill key={index}/> : <GoStar key={index}/>
                                 ))}
                              </ReviewScoreStars>
                           </ReviewScore>
                           <ReviewImages>
                              {review.imageUrls.map((url, index) => (
                                 <ReviewImage key={index} src={url} alt={`리뷰 이미지 ${index + 1}`} />
                              ))}
                           </ReviewImages>
                           <ReviewContent>
                              <ReviewText>{review.review}</ReviewText>
                              <ReviewDateAndDelete>
                                 <span>{"날짜 없음"}</span> {/* API에서 날짜 없음 */}
                                 <DeleteButton>삭제</DeleteButton>
                              </ReviewDateAndDelete>
                           </ReviewContent>
                        </RealReviewContainer>
                     </ReviewCard>
                  ))
               ) : (
                  <NoReviewMessage>아직 등록된 리뷰가 없어요.</NoReviewMessage>
               )}
            </ReviewContents>
         </ReviewsContainer>
      </Wrapper>
   )
}

export default Reviewpage

const NoReviewMessage = styled.div`
   text-align: center;
   font-size: 14px;
   color: #808080;
   margin-top: 20px;
`

const ReviewImages = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
`

const Wrapper = styled.div`
   width: 100%;
   max-width: 470px; /*  모바일 화면 비율 고정 */
   margin: 0 auto; /*  중앙 정렬 */
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;
`


////////////////////////
const ProfileWrapper = styled.div`
   width: 100%;
   height: 230px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center ;
   background-color: #000000;
`

const ProfileContainer = styled.div`
   width: 90%;
   height: 190px;
   padding: 25px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   border-radius: 6px;
   background-color: #ffffff; 
`

const ReviewImage = styled.img`
   height: auto;
   border-radius: 6px;
   width: 30%;
   aspect-ratio: 1/1;
   object-fit: cover;
`


const TopProfile = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;

   align-self: flex-start;
`


const ProfileImage = styled.div`
   width: 55px;
   aspect-ratio: 1/1;
   border-radius: 50%;
   background-color: #f0f0f0;
`

const NameAndAddress = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   margin-left: 20px;
   padding: 5px 0;
   box-sizing: border-box;
   gap: 5px;
`

const Name = styled.div`
   font-size: 18px;
   font-weight: bold;   
`

const Address = styled.div`
   font-size: 13px;
`


//////
const BottomProfile = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-top: 18px;

`
const ScoreTitle = styled.div`
   width: 100%;
   font-size: 13px;
   font-weight: bold;
`

const ScoreContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

const ScoreNumber = styled.div`
   font-size: 40px;
   font-weight: bold;
   color: #000000;
`

const ScoreStars = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;

   font-size: 30px;
   color: #000000;
`


/////////////////////
const ReviewsContainer = styled.div`
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #f0f0f0;
   

`

const ReviewTitleContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

const ReviewNumber = styled.div`
   font-size: 21px;
   font-weight: bold;
`

const ReviewOrder = styled.div`
   font-size: 13px;
   color: #808080;
   background-color: #f6f6f6;
   padding: 5px 10px;
   border-radius: 6px;
`

const ReviewContents = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`

const ReviewCard = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   padding: 20px;
   box-sizing: border-box;
   border-radius: 6px;
   background-color: #ffffff;
   gap: 10px;
`

const RealReviewContainer = styled.div`
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   background-color: #f0f0f0;
   gap: 10px;
`

const ReviewScore = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;
`

const ReviewScoreNumber = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 18px;
   font-weight: bold;
`

const ReviewScoreStars = styled.div`
   font-size: 18px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 5px;
`

const ReviewContent = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
`

const ReviewText = styled.div`
   font-size: 15px;
   margin-bottom: 10px;

   //줄간격
   line-height: 1.4;
`

const ReviewDateAndDelete = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   font-size: 12px;
   color: #808080;
`

const DeleteButton = styled.div`
   font-size: 12px;
   color: #808080;
   cursor: pointer;
   //밑줄
   text-decoration: underline;
`

