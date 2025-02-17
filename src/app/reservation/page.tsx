"use client";
import { useEffect, useState } from "react";
import styled from "styled-components"

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
                     </Consulting>
                     <Time>
                        <SmallTitle>예약 시간</SmallTitle>
                     </Time>
                  </ConsultingAndTime>
                  <MeetingLink>

                  </MeetingLink>
                  <Informations>

                  </Informations>
               </BottomProfile>
            </ProfileContainer>
         </ProfileWrapper>
      </Wrapper>
   )
}

export default ReservationPage

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

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
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 20px;
`

const Consulting = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const Time = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const SmallTitle = styled.div`
   font-size: 13px;
   font-weight: bold;
`

const MeetingLink = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`

const Informations = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`

