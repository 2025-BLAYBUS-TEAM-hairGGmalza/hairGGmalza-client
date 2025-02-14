'use client';

import Header from '@/components/common/Header/Header';
import { useParams } from 'next/navigation'
import React from 'react'
import styled from 'styled-components';

const Reviewpage = () => {
   const params = useParams();

   return (
      <Wrapper>
         {/* <ReviewPageHeader>리뷰</ReviewPageHeader> */}
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

const ReviewPageHeader = styled.header`
   width: 100%;
   height: 55px;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   font-size: 20px;
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
