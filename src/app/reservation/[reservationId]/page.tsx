"use client";
import { getDesigner } from "@/apis/designerAPI";
import { getReservationDetail } from "@/apis/reservationAPI";
import BottomButtonBar from "@/components/common/BottomButtonBar";
import Tag from "@/components/common/Tag";
import { formatDateTime } from "@/utils/formatDate";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components"

const ReservationDetailpage = () => {
   const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태
   const [designerName, setDesignerName] = useState<string | null>(null);
   const [address, setAddress] = useState<string | null>(null);
   const [region, setRegion] = useState<string | null>(null);
   const [consultingType, setConsultingType] = useState<string | null>(null);
   const [time, setTime] = useState<string | null>(null);
   const [status, setStatus] = useState<string | null>(null);
   const [price, setPrice] = useState<string | null>(null);
   const reservationId = String(useParams().reservationId);
   const router = useRouter();



  const formatStatus = (status: string): string => {
      switch (status) {
         case "WAITING":
            return "입금 확인 중";
         case "PAYMENT_COMPLETED":
            return "예약 확정";
         case "CANCELED":
            return "예약 취소";
         case "COMPLETED":
            return "이용 완료";
         default:
            return "알 수 없음";
      }
   };

  const handleCopy = () => {
      const address = document.getElementById('address_detail')?.textContent;
      navigator.clipboard.writeText(address || '');
      alert('주소가 복사되었습니다.');
   }

   const handleBack = () => {
      router.back();
   }

   useEffect(() => {
      const fetchReservationDetail = async () => {
         try {
            const res = await getReservationDetail(reservationId);

            //여기서 받은 designerId를 이용해서 디자이너 정보도 받아와야 함
            const designerId = res.data.designerId;
            const designerRes = await getDesigner(designerId);
            const designerData = designerRes.data;
            setDesignerName(designerData.name);
            setAddress(designerData.address);
            setRegion(designerData.region);

            //OFFLINE이면 대면, ONLINE이면 화상
            setConsultingType(res.data.meetingType === "OFFLINE" ? "대면" : "화상");
            //예약 시간 파싱해서 변경
            setTime(formatDateTime(res.data.reservationDate));
            setStatus(formatStatus(res.data.state));
            setPrice(res.data.price);
         } catch (error) {
            console.error("예약 상세 정보를 불러오는 중 오류 발생:", error);
         } finally {
            setIsLoading(false); // 데이터 로드 완료
         }
      };

      if (reservationId) {
         fetchReservationDetail();
      }

   }, [reservationId]);

   // 데이터가 아직 로딩 중이면 로딩 화면 표시
   if (isLoading) {
      return <Wrapper>
               <div style={{fontSize:'20px', justifySelf:'center', marginTop:'50px'}}>잠시만 기다려주세요...</div>;
            </Wrapper>
   }

   return (
      <Wrapper>
         <Header>{status}</Header>
         
         <ReservationCard>
         <TopProfile>
            <ProfileImage />
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
                  <Tag type='consulting' text={consultingType || "대면"} />
               </Consulting>
               <Time>
                  <SmallTitle>예약 시간</SmallTitle>
                  <span style={{fontSize:'16px'}}>{time}</span>
               </Time>
            </ConsultingAndTime>
            <AdressRow>
               <SmallTitle>샵주소</SmallTitle>
               <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
                  <span style={{fontSize:'16px' }}>{address}</span>
                  <span onClick={handleCopy} style={{fontSize:'16px', color:'#989898', textDecoration:'underline', cursor:'pointer' }}>복사</span>
               </div>
            </AdressRow>
            <StatusRow>
               <Badge>{status}</Badge>
               <span>{price}원</span>
            </StatusRow>
         </BottomProfile>
      </ReservationCard>

      {consultingType === '대면' ?
      <RequestCard>
               <span style={{fontSize:'15px'}}>대면 컨설팅 시 유의해주세요!</span>
               <RequestInput>· 대면 컨설팅은 실제 샵에 방문하여 진행됩니다. <br/>
                              · 컨설팅 예약 시간 전, 10분 전까지 샵에 도착하여 컨설팅을 준비해주세요.<br/>
                              · 예약 당일 10분 이상 지각 시 노쇼로 처리될 수 있으며, 소정의 수수료가 부과될 수 있습니다.<br/>
                              ·예약 변경을 원하시는 경우, 예약 취소 후 재예약 해주시기 바랍니다.</RequestInput>
            </RequestCard>
            :      
            <RequestCard>
               <span style={{fontSize:'15px'}}>화상 컨설팅 시 유의해주세요!</span>
               <RequestInput>· 화상 컨설팅은 예약 완료 후 생성되는 구글미트에서 화상으로 진행됩니다. <br/>
                              · 컨설팅 예약 시간 전, 10분 전까지 구글미트에 접속하여 컨설팅을 준비해주세요. <br/>
                              · 예약 당일 10분 이상 지각 시 노쇼로 처리될 수 있으며, 소정의 수수료가 부과될 수 있습니다. <br/>
                              · 예약 변경을 원하시는 경우, 예약 취소 후 재예약 해주시기 바랍니다.</RequestInput>
         </RequestCard>}

         <BottomButtonBar>
            <button 
               style={{width:'100%', backgroundColor:'#000000', padding:'15px', fontSize:'16px', border:'none', cursor:'pointer', color:'#F3D7E5'}}
               onClick={handleBack}
            >뒤로 가기</button>
         </BottomButtonBar>
      </Wrapper>
   );
}

export default ReservationDetailpage;


const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   background-color: #ffffff;
   padding-bottom: 30px;
`

const Header = styled.div`
   width: 90%;
   font-size: 20px;
   font-weight: bold;
   padding: 20px;
   padding-top: 80px;
   box-sizing: border-box;
   text-align: center;
   background-color: #ffffff;
`


const ReservationCard = styled.div`
width: 85%;
padding: 25px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-radius: 6px;
background-color: #F8F8F8; 
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
   background-image: url('/images/hairmodel.png');
   background-size: cover;
   background-position: center;
   
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


const AdressRow = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-top: 20px;
`

const StatusRow = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-top: 20px;
gap: 20px;
font-size: 15px;
`

const Badge = styled.div`
   font-weight: bold;
   color: #F3D7E5;
   background-color: #1E1E1E;
   padding: 7px 10px;
   border-radius:4px;
`


//////
const RequestCard = styled.div`
width: 85%;
margin-top: 20px;
`

const RequestInput = styled.div`
width: 100%;
margin-top: 10px;
padding: 15px;
box-sizing: border-box;
font-size: 14px;
background-color: #f0f0f0;
border: none;
color: #7C7C7C;
`