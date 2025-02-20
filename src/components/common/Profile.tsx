import styled from "styled-components"
import Tag from "./Tag"
import { useEffect, useState } from "react";
import { getDesigner } from "@/apis/designerAPI";
import { getReservationDetail } from "@/apis/reservationAPI";
import { useRouter } from "next/navigation";

interface ProfileProps {
   designerId: string;
   reservationId: string;
}


const Profile: React.FC<ProfileProps> = ({ designerId, reservationId }) => {
   const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태
   const [designerProfile, setDesignerProfile] = useState<string | undefined>("");
   const [designerName, setDesignerName] = useState<string | null>(null);
   const [address, setAddress] = useState<string | null>(null);
   const [region, setRegion] = useState<string | null>(null);
   const [consultingType, setConsultingType] = useState<string | null>(null);
   const [dateTime, setDateTime] = useState<string | null>(null);
   const router = useRouter();

   const handleReservationDetail = (reservationId: string) => {
      console.log("예약 상세 페이지로 이동");
      router.push(`/reservation/${reservationId}`);
   }

   useEffect(() => {
      //designerId로 디자이너 정보 받아오기
      try {
         const fetchDesigner = async () => {
            const res = await getDesigner(designerId);
            const designerData = res.data;
            setDesignerName(designerData.name);
            setAddress(designerData.address);
            setRegion(designerData.region);
            setDesignerProfile(designerData.profile);

            // console.log("✅ 디자이너 정보:", {
            //    name: designerData.name,
            //    address: designerData.address,
            //    region: designerData.region
            // });
         }

         //reservationId로 예약 정보 받아오기
         const fetchReservationDetail = async () => {
            const res = await getReservationDetail(reservationId);
            const reservationData = res.data;
            setConsultingType(reservationData.meetingType === "OFFLINE" ? "대면" : "화상");
            setDateTime(reservationData.reservationDate);

            // console.log("✅ 예약 정보:", {
            //    meetingType: reservationData.meetingType,
            //    consultingType: reservationData.meetingType === "OFFLINE" ? "대면" : "화상",
            //    consultingDateTime: reservationData.consultingDateTime
            // });
         }

         fetchDesigner();
         fetchReservationDetail();

      } catch (error) {
         console.error(error);
      } finally {
         setIsLoading(false);
         //setting된 데이터 확인
      }

   }, [designerId, reservationId]);

   // 데이터가 아직 로딩 중이면 로딩 화면 표시
   if (isLoading) {
      return <Wrapper>
               <div></div>;
            </Wrapper>
   }

   return (
      <Wrapper>
         <TopProfile>
            <ProfileImage src={designerProfile} />
            <NameAndAddress>
               <Name>{designerName}</Name>
               <Address>
                  <span id='address_detail' style={{marginRight:'10px'}}>{address}</span>
                  <span id='address_category' style={{color: '#808080'}}>{region}</span>
               </Address>
            </NameAndAddress>
         </TopProfile> 

         <BottomProfile>   
            <ConsultingAndTime>
               <Consulting>
                  <SmallTitle>컨설팅 유형</SmallTitle>
                  {/* <Tag type='consulting' text='대면' /> */}
                  {consultingType === "대면" ? <Tag type='consulting' text='대면' /> : <Tag type='consulting' text='화상' />}
               </Consulting>
               <Time>
                  <SmallTitle>예약 시간</SmallTitle>
                  <span style={{fontSize:'16px'}}>{dateTime}</span>
               </Time>
            </ConsultingAndTime>
            {/* <ReviewContainer>
               <ReviewTitle>
                  <span>4.8</span>
                  <GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/>
               </ReviewTitle>
               <ReviewText>라뷰가줄줄줄리뷰가여기있다리듀가버이러이랴더랴머이래데재러이나</ReviewText>
            </ReviewContainer> */}
            <Buttons>
               <GrayBox className="reviewBtn">리뷰작성</GrayBox>
               <GrayBox onClick={()=>handleReservationDetail(reservationId)}>예약정보</GrayBox>
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


const ProfileImage = styled.img`
   width: 55px;
   aspect-ratio: 1/1;
   border-radius: 50%;
   object-fit: cover;
   object-position: center;
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

// const ReviewContainer = styled.div`
//    width: 100%;
//    display: flex;
//    flex-direction: column;
//    align-items: flex-start;
//    justify-content: center;
//    gap: 10px;
//    background-color: #f0f0f0;
//    border-radius: 4px;
//    padding: 15px 20px;
//    box-sizing: border-box;
// `

// const ReviewTitle = styled.div`
//    font-size: 18px;
//    font-weight: bold;
//    display: flex;
//    flex-direction: row;
//    align-items: center;
//    justify-content: flex-start;
//    gap: 10px;
// `

// const ReviewText = styled.div`
//    font-size: 15px;
// `