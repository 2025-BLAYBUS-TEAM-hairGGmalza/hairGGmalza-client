'use client';

import Header from '@/components/common/Header/Header';
import { useParams } from 'next/navigation'
import React from 'react'
import styled from 'styled-components';

const Reviewpage = () => {
   const params = useParams();

   //리뷰카드 임시 더미데이터
   const reviewData = [
      {
         id: 1,
         name: '박수빈 디자이너',
         address: '서울 강남구 압구정로79길',
         category: '홍대/연남/합정',
         score: 4.5,
         review: '리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다',
         date: '2021.10.10'
      },
      {
         id: 2,
         name: '박수빈 디자이너',
         address: '서울 강남구 압구정로79길',
         category: '홍대/연남/합정',
         score: 4.5,
         review: '리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다',
         date: '2021.10.10'
      },
      {
         id: 3,
         name: '박수빈 디자이너',
         address: '서울 강남구 압구정로79길',
         category: '홍대/연남/합정',
         score: 4.5,
         review: '리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는 길게끝까지더보기없이계속들어간다리뷰가줄줄줄줄여기에들어가는데 여기에서는길게끝까지더보기없이계속들어간다',
         date: '2021.10.10'
      }
   ]

   return (
      <Wrapper>
         <Header where='designer' />

         <ProfileWrapper>
            <ProfileContainer>
               <TopProfile>
                  <ProfileImage />
                  <NameAndAddress>
                     <Name>박수빈 디자이너({params.id}번)</Name>
                     <Address>
                        <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                        <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                     </Address>
                  </NameAndAddress>
               </TopProfile>
               <BottomProfile>   
                  <ScoreTitle>평균평점</ScoreTitle>
                  <ScoreContainer>
                     <ScoreNumber>4.5</ScoreNumber>
                     <ScoreStar>★★★★☆</ScoreStar>   
                  </ScoreContainer>
               </BottomProfile>
            </ProfileContainer>
         </ProfileWrapper>

         <ReviewsContainer>
            <ReviewTitleContainer>
               <ReviewNumber>145개</ReviewNumber>
               <ReviewOrder>최근 등록 순</ReviewOrder>
            </ReviewTitleContainer>
            <ReviewContents>
               {reviewData.map((review) => (
                  <ReviewCard key={review.id}>
                     <TopProfile>
                        <ProfileImage />
                        <NameAndAddress>  
                           <Name>{review.name}</Name>
                           <Address>
                              <span id='address_detail' style={{marginRight:'10px'}}>{review.address}</span>
                              <span id='address_category' style={{color: '#808080'}}>{review.category}</span>
                           </Address>
                        </NameAndAddress>
                     </TopProfile>
                     <RealReviewContainer>
                        <ReviewScore>
                           <ReviewScoreNumber>{review.score}</ReviewScoreNumber>
                           <ReviewScoreStar>★★★★☆</ReviewScoreStar>
                        </ReviewScore>
                        <ReviewContent>
                           <ReviewText>{review.review}</ReviewText>
                           <ReviewDate>{review.date}</ReviewDate>
                        </ReviewContent>
                     </RealReviewContainer>
                  </ReviewCard>
               ))}
            </ReviewContents>
         </ReviewsContainer>
      </Wrapper>
   )
}

export default Reviewpage

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

const ScoreStar = styled.div`
   font-size: 35px;
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
   font-size: 18px;
   font-weight: bold;
`

const ReviewScoreStar = styled.div`
   font-size: 18px;
`

const ReviewContent = styled.div`
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

const ReviewDate = styled.div`
   font-size: 12px;
   color: #808080;
`

