"use client";

import BottomButtonBar from '@/components/common/BottomButtonBar';
import BottomModal from '@/components/common/BottomModal';
import Header from '@/components/common/Header/Header';
import ReviewAndPortfolio from '@/components/ReviewAndPortfolio';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components'

// import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/src/shared/types.js';
import CenterModal from '@/components/common/CenterModal';


const DesignerPage = () => {
   const searchParams = useSearchParams();
   const id = searchParams.get('id'); //쿼리에서 id 가져오기

   const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);
   const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [selectedConsultingType, setSelectedConsultingType] = useState<"대면" | "화상" | null>(null);
   const [selectedTime, setSelectedTime] = useState<string | null>(null);
   const [isMounted, setIsMounted] = useState(false);

   const handleConsultingTypeChange = (type: "대면" | "화상") => {
   setSelectedConsultingType(type);
   };

   const handleTimeSelection = (time: string) => {
   setSelectedTime(time);
   };

   const handleReservationButtonClick = () => {
      if (!isBottomModalOpen) {
         setIsBottomModalOpen(true);
         return;
      }
   
      // 예외 처리: 선택하지 않은 항목이 있으면 alert 표시
      if (!selectedConsultingType) {
      alert("상담유형을 선택해주세요.");
      return;
      }
   
      if (!selectedDate) {
      alert("일정을 선택해주세요.");
      return;
      }
   
      if (!selectedTime) {
      alert("시간을 선택해주세요.");
      return;
      }
   
      // 모든 값이 선택되었을 때 콘솔 출력
      console.log("상담유형:", selectedConsultingType);
      console.log("선택한 날짜:", selectedDate.toLocaleDateString("ko-KR"));
      console.log("선택한 시간:", selectedTime);
   };
   


   const handleHeartClick = () => {
      console.log('하트 클릭');
      //todo: 하트 클릭시 좋아요 수 증가
   }

   const handleDateChange = (date: Value) => {
      if (!date || Array.isArray(date)) return; // 다중 선택 방어
    
      setSelectedDate(date);
      console.log(date.toLocaleDateString("ko-KR"));
   };

   useEffect(() => {
      setIsMounted(true);
   }, []);
   if (!isMounted) return null;

   return (
      <DesignerPageWrapper>
         {/* <DesignerPageHeader>디자이너 정보</DesignerPageHeader> */}
         <Header where='designer' />
         <DesignerMainImage />
         <Content>
            <MainIntroContainer>
               <ProfileImage />
               <NameAndAddress>
                  <Name>박수빈 디자이너({id}번)</Name>
                  <Address>
                     <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                     <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                  </Address>
               </NameAndAddress>
               <HeartContainer id='heart_container'>
                  <HeartImage src='/images/heart.png' onClick={handleHeartClick}/>
                  <span style={{fontSize:'10px'}}>32</span>
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
                  <span>컨설팅 유형</span>
                  <Tag>
                     <ScissorImg src='/images/scissors.png'/>
                     <span>대면/화상</span>
                  </Tag>
               </div>
            </TagsContainer>
            <PricesContainer>
               <PriceCard>
                  <span id='price_title'>대면</span>
                  <span id='price'>30,000원</span>
               </PriceCard>
               <PriceCard>
                  <span id='price_title'>커트</span>
                  <span id='price'>30,000원</span>
               </PriceCard>
            </PricesContainer>

            <ReviewAndPortfolio />
         </Content>


         {/* 하단 모달 */}
         <BottomModal isOpen={isBottomModalOpen} onClose={() => setIsBottomModalOpen(false)} title="예약하기">
            {/* <TabContainer>
               <TabButton>상담유형</TabButton>
               <TabButton>일정</TabButton>
            </TabContainer> */}

            <ChoiceContainer id='consulting_type'>
               <ChoiceTitle>컨설팅 유형</ChoiceTitle>
               <ChoiceButtonContainer>
                  <ChoiceButton onClick={() => {handleConsultingTypeChange("대면"); setIsCenterModalOpen(true);}} 
                                 selected={selectedConsultingType === "대면"}>
                     <span id='price_title'>대면</span>
                     <span id='price'>30,000원</span>
                  </ChoiceButton>
                  <ChoiceButton onClick={() => handleConsultingTypeChange("화상")} 
                                 selected={selectedConsultingType === "화상"}>
                     <span id='price_title'>화상</span>
                     <span id='price'>30,000원</span>
                  </ChoiceButton>
               </ChoiceButtonContainer>
            </ChoiceContainer>
            <ChoiceContainer id='date'>
               <ChoiceTitle>일정</ChoiceTitle>
               <Calendar 
                  onChange={handleDateChange} 
                  value={selectedDate} 
                  formatDay={(locale, date) => date.getDate().toString()}
                  />
            </ChoiceContainer>
            <ChoiceContainer id ='time' style={{paddingBottom:'70px'}}>  {/* 고정 예약 버튼을 위한 여백 */}
               <ChoiceTitle>오전</ChoiceTitle>
               <TimeContainer>
               {["10:00", "10:30", "11:00", "11:30"].map((time) => (
                  <TimeButton
                     key={time}
                     selected={selectedTime === time}
                     onClick={() => handleTimeSelection(time)}
                  >
                     {time}
                  </TimeButton>
               ))}
               </TimeContainer>
               <ChoiceTitle style={{marginTop:'20px'}}>오후</ChoiceTitle>
               <TimeContainer>
                  {["12:00", "12:30", "1:00", "1:30",
                  "2:00", "2:30", "3:00", "3:30",
                  "4:00", "4:30", "5:00", "5:30",
                  "6:00", "6:30", "7:00", "7:30", "8:00"
                  ].map((time) => (
                     <TimeButton
                        key={time}
                        selected={selectedTime === time}
                        onClick={() => handleTimeSelection(time)}
                     >
                        {time}
                     </TimeButton>
                  ))}
               </TimeContainer>
            </ChoiceContainer>

            {/* 센터 모달 */}
            <CenterModal 
               isOpen={isCenterModalOpen} onClose={() => setIsCenterModalOpen(false)}
               title="대면 컨설팅을 선택했어요"
               first={"대면 컨설팅은 30,000원*부터 시작되며\n 실제 샵에 방문하여 진행됩니다."}
               second={"컨설팅은 약 30분 소요되며\n종료 후 요약 리포트로 확인 가능해요."}               third="*컨설팅 가격의 경우 디자이너마다 상이할 수 있습니다. "
            />
         </BottomModal>

          {/* 하단 고정 예약 버튼 */}
         <BottomButtonBar>
            <ShareButton src='/images/shareButton.png' />
            <ReservationButton onClick={handleReservationButtonClick}>
               {/* {isModalOpen ? "예약 확인" : "예약하기"} */}
               예약하기
            </ReservationButton>         
         </BottomButtonBar>
      </DesignerPageWrapper>
   )
}

export default DesignerPage
///////
// const TabContainer = styled.div`
//    width: 100%;
//    display: flex;
//    flex-direction: row;
//    align-items: center;
//    justify-content: flex-start;
//    margin-top: 20px;
//    border-bottom: 1px solid #eee;
// `

// const TabButton = styled.button`
//    background: none;
//    border: none;
//    font-size: 16px;
//    cursor: pointer;
// `  

const ChoiceContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`

const ChoiceTitle = styled.div`
   width: 100%;
   font-size: 16px;
   font-weight: bold;
   margin-bottom: 10px;
`

const ChoiceButtonContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 15px;
   gap: 15px;
`

const ChoiceButton = styled.div<{ selected: boolean }>`
   font-size: 14px;
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 6px;
   padding: 17px;
   background-color: ${(props) => (props.selected ? "black" : "#f1f1f1")};
   color: ${(props) => (props.selected ? "white" : "black")};
   cursor: pointer;
   transition: all 0.1s ease-in-out;
`;

const TimeContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   justify-content: flex-start; /* 왼쪽 정렬 유지 */
`;


const TimeButton = styled.button<{ selected: boolean }>`
   flex: 1 1 calc(25% - 10px);
   max-width: calc(25% - 10px);
   aspect-ratio: 2/1;
   background-color: ${(props) => (props.selected ? "black" : "#f0f0f0")};
   color: ${(props) => (props.selected ? "white" : "black")};
   font-size: 14px;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   border-radius: 4px;

   &:hover {
      background: ${(props) => (props.selected ? "black" : "#e0e0e0")};
   }
`;



///////

const DesignerPageWrapper = styled.div`
   width: 100%;
   max-width: 470px; /* 모바일 화면 비율 고정 */
   margin: 0 auto; /*  중앙 정렬 */
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;

   /* 하단 고정 예약 버튼을 위한 여백 */
   padding-bottom: 70px;
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
   margin-left: 20px;
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

   margin-left: auto;
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
   padding: 17px;
   background-color: #f1f1f1;
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
   padding: 14px 24px;
   cursor: pointer;
   transition: all 0.2s ease-in-out;

   &:hover {
      background: #f0f0f0;
   }
`