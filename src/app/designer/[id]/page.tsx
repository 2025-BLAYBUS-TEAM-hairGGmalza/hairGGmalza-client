"use client";

import Header from '@/components/common/Header/Header';
import ReviewAndPortfolio from '@/components/ReviewAndPortfolio';
import { useParams } from 'next/navigation';
import styled from 'styled-components'

const DesignerPage = () => {
   const params = useParams();

   const onHeartClick = () => {
      console.log('하트 클릭');
      //todo: 하트 클릭시 좋아요 수 증가
   }


   return (
      <DesignerPageWrapper>
         {/* <DesignerPageHeader>디자이너 정보</DesignerPageHeader> */}
         <Header where='designer' />
         <DesignerMainImage />
         <Content>
            <MainIntroContainer>
               <ProfileImage />
               <NameAndAddress>
                  <Name>박수빈 디자이너({params.id}번)</Name>
                  <Address>
                     <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                     <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                  </Address>
               </NameAndAddress>
               <HeartContainer id='heart_container'>
                  <HeartImage src='/images/heart.png' onClick={onHeartClick}/>
                  <span>32</span>
               </HeartContainer>
            </MainIntroContainer>
            <OneLineIntro>
               트렌디한 감성, 섬세한 손길로 새로운 감성을
            </OneLineIntro>
            <TagsContainer>
               <div id='professional_tag' style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                  <span>전문분야</span>
                  <Tag>
                     <ScissorImg  src='/images/scissors.png'/>
                     <span>레이어드 컷</span>
                  </Tag>
               </div>
               <div id='consulting_tag' style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                  <span>상담유형</span>
                  <Tag>
                     <ScissorImg src='/images/scissors.png'/>
                     <span>대면/화상</span>
                  </Tag>
               </div>
            </TagsContainer>
            <PricesContainer>
               <PriceCard>
                  <PriceImg />
                  <span id='price_title'>대면</span>
                  <span id='price'>30,000원</span>
               </PriceCard>
               <PriceCard>
                  <PriceImg />
                  <span id='price_title'>커트</span>
                  <span id='price'>30,000원</span>
               </PriceCard>
            </PricesContainer>

            <ReviewAndPortfolio />
         </Content>

          {/* 하단 고정 예약 버튼 */}
          <FixedBottomBar>
            <ShareButton src='/images/shareButton.png'/>
            <ReservationButton>예약하기</ReservationButton>
         </FixedBottomBar>
      </DesignerPageWrapper>
   )
}

export default DesignerPage

const DesignerPageWrapper = styled.div`
   width: 100%;
   max-width: 470px; /* ✅ 모바일 화면 비율 고정 */
   margin: 0 auto; /* ✅ 중앙 정렬 */
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;

   /* 하단 고정 예약 버튼을 위한 여백 */
   padding-bottom: 70px;
`


const DesignerPageHeader = styled.header`
   width: 100%;
   height: 55px;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   font-size: 20px;

   border-bottom: 1px solid #747474;
`

const DesignerMainImage = styled.div`
   width: 100%;
   height: 350px;
   background-color: #f0f0f0;
`

const Content = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;

`

const MainIntroContainer = styled.div`
   width: 100%;
   height: 60px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

`

const ProfileImage = styled.div`
   height: 100%;
   aspect-ratio: 1/1;
   border-radius: 50%;
   background-color: #f0f0f0;
`

const NameAndAddress = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   
   margin-left: -50px; //이거 더 좋게 하는 방법 있을까... 너무 바보같아!
`

const Name = styled.div`
   font-size: 19px;
   font-weight: bold;   
`

const Address = styled.div`
   font-size: 13px;
`

const HeartContainer = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`

const HeartImage = styled.img`
   width: 30px;
   height: 30px;
   cursor: pointer;
`

const OneLineIntro = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;
   font-size: 15px;
   font-weight: bold;
`

const TagsContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   margin-top: 30px;
   font-size: 14px;
   gap: 11px;


`

const Tag = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   background-color: #f0f0f0;
   color: #565656;
   font-weight: bold;
   padding: 6px 8px;
   border-radius: 6px;
`

const ScissorImg = styled.img`
   width: 13px;
   height: 13px;
   margin-right: 5px;

`

const PricesContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: space-between;
   margin-top: 20px;
   gap: 10px;
`

const PriceCard = styled.div`
   font-size: 14px;
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 6px;
   padding: 13px;
   background-color: #f1f1f1;
`

const PriceImg = styled.img`
   width: 30px;
   height: 30px;
`


// 하단 고정 예약 버튼
const FixedBottomBar = styled.div`
   position: fixed;
   bottom: 0;
   width: inherit; /* ✅ 부모의 너비(모바일 비율)에 맞춤 */
   max-width: 470px; /* ✅ 모바일 화면 비율 유지 */
   left: 50%;
   transform: translateX(-50%); /* ✅ 중앙 정렬 */
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: black;
   padding: 0 15px;
   box-sizing: border-box;
   z-index: 100;
`


const ShareButton = styled.img`
   height: 30px;
   background: none;
   border: none;
   cursor: pointer;
   margin-left: 40px;
`;

const ReservationButton = styled.button`
   width: 300px;
   background: white;
   color: black;
   font-size: 16px;
   font-weight: bold;
   border: none;
   padding: 12px 24px;
   cursor: pointer;
   transition: all 0.2s ease-in-out;

   &:hover {
      background: #f0f0f0;
   }
`;
