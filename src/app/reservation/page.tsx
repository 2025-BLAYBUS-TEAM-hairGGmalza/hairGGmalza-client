"use client";
import Tag from "@/components/common/Tag";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { IoShareSocialOutline } from "react-icons/io5";
import Profile from "@/components/common/Profile";

const ReservationPage = () => {
   const [isMounted, setIsMounted] = useState(false);
   

   useEffect(() => {
      setIsMounted(true);
   }, []);
   if (!isMounted) return null;

   return (
      <Wrapper>
         <ProfileWrapper>
            <Title>
               <span style={{color:'white', fontWeight:'1000', fontSize:'20px'}}>확정된 컨설팅 예약</span>
               <DDay>D-3</DDay>
            </Title>
            <ProfileContainer>
               <TopProfile>
                  <ProfileImage />
                  <NameAndAddress>
                     <Name>박수빈 디자이너</Name>
                     <Address>
                        <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                        <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                     </Address>
                  </NameAndAddress>
               </TopProfile> 
               {/* 여기까지 공통 */}
               <BottomProfile>   
                  <ConsultingAndTime>
                     <Consulting>
                        <SmallTitle>컨설팅 유형</SmallTitle>
                        <Tag type='consulting' text='대면' />
                     </Consulting>
                     <Time>
                        <SmallTitle>예약 시간</SmallTitle>
                        <span style={{fontSize:'16px'}}>2월 12일 (수) | 오후 18:00</span>
                     </Time>
                  </ConsultingAndTime>
                  <MeetingLink>
                     <SmallTitle>미팅 링크(시간에 맞춰 접속해주세요)</SmallTitle>
                     <GrayBox>
                        <IoShareSocialOutline style={{fontSize:'20px'}} />
                        <span style={{textDecoration:'underline', color:'#333'}}>화상 컨설팅 바로가기</span>
                     </GrayBox>
                  </MeetingLink>
                  <Informations>
                     <GrayBox>예약정보</GrayBox>
                     <GrayBox>결제정보</GrayBox>
                  </Informations>
               </BottomProfile>
            </ProfileContainer>
         </ProfileWrapper>
         <ConsultingRecordsWrapper>
            <span style={{fontWeight:'bold', fontSize:'18px', width:'100%', textAlign:'start'}}>컨설팅 기록</span>

            <Profile />
            <Profile />
            <Profile />
         </ConsultingRecordsWrapper>
      </Wrapper>
   )
}

export default ReservationPage

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   background-color: #f0f0f0;
   padding-bottom: 30px;
`
const ProfileWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center ;
   background-color: #000000;
   padding: 20px;
   box-sizing: border-box;
`

const ProfileContainer = styled.div`
   width: 95%;
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

const Title = styled.div`
   width: 95%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
`

const DDay = styled.div`
   font-size: 14px;
   font-weight: bold;
   background-color: #F3D7E5;
   padding: 10px 25px;
   border-radius: 6px;
`  

const ConsultingAndTime = styled.div`
   width: 100%;
   height: 60px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 20px;
`

const Consulting = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`

const Time = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`

const SmallTitle = styled.div`
   font-size: 13px;
   font-weight: bold;
   margin-bottom: 10px;
   color: #5f5f5f;
`

const MeetingLink = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   margin-top: 20px;
`

const Informations = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 10px;
   margin-top: 20px;
`

const GrayBox = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;
   padding: 15px 10px;
   border-radius: 6px;
   box-sizing: border-box;
   background-color: #f0f0f0;
   font-size: 15px;
   cursor:pointer;
`

//////consulting records 
const ConsultingRecordsWrapper = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-top: 20px;
   gap: 20px;
`