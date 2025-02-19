import styled from "styled-components"
import Tag from "./Tag"
import { GoStarFill } from "react-icons/go";


const Profile = () => {
   return (
      <Wrapper>
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
            <ReviewContainer>
               <ReviewTitle>
                  <span>4.8</span>
                  <GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/>
               </ReviewTitle>
               <ReviewText>라뷰가줄줄줄리뷰가여기있다리듀가버이러이랴더랴머이래데재러이나</ReviewText>
            </ReviewContainer>
            <Buttons>
               <GrayBox className="reviewBtn">리뷰작성</GrayBox>
               <GrayBox>예약정보</GrayBox>
               <GrayBox>리포트 확인</GrayBox>
            </Buttons>
         </BottomProfile>
      </Wrapper>
   )
}

export default Profile

const Wrapper = styled.div`
   width: 100%;
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
   gap: 20px;
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

const GrayBox = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 10px;
   padding: 15px 10px;
   border-radius: 6px;
   box-sizing: border-box;
   background-color: #f0f0f0;
   font-size: 15px;
   cursor:pointer;

   &:hover {
      background-color: #e0e0e0;
   }

`

const Buttons = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 10px;

   .reviewBtn{
      background-color: black;
      color: white;
   }
`

const ReviewContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 10px;
   background-color: #f0f0f0;
   border-radius: 4px;
   padding: 15px 20px;
   box-sizing: border-box;
`

const ReviewTitle = styled.div`
   font-size: 18px;
   font-weight: bold;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;
`

const ReviewText = styled.div`
   font-size: 15px;
`