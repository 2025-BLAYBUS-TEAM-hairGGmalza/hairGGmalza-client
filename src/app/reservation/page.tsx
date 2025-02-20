"use client";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Profile from "@/components/common/Profile";
import Navbar from "@/components/common/Navbar/Navbar";
import { getReservations } from "@/apis/reservationAPI";
import FutureReservation from "@/components/FutureReservation";

export interface FutureReservation {
   designer: {
      designerId: string;
      address: string;
      description: string;
      name: string;
      profile: string;
      region: string;
   }
   id: string;
   meetUrl: string;
   meetingType: string;
   price: number;
   reservationDate: string;
   state: string;
}

interface PastReservation {
   designerId: string;
   reservationId: string;
}

const ReservationPage = () => {
   const [isMounted, setIsMounted] = useState(false);
   // const [pastReservations, setPastReservations] = useState<Reservation[]>([]);
   const [futureReservations, setFutureReservations] = useState<FutureReservation[]>([]);
   const [pastReservations, setPastReservations] = useState<PastReservation[]>([]);
   const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가

   useEffect(() => {
      setIsMounted(true);
      
      // 예약 데이터 불러오기
      const fetchData = async () => {
         try {
            const res = await getReservations();
            const reservations = res.data;
            console.log("✅ 전체 예약 내역:", reservations);

            // 현재 날짜 가져오기
            const now = new Date();

            //reservation 객체 배열을 돌면서, 'reservationDate'가 현재 날짜보다 이전이면 'pastReservations'에 추가
            // 그렇지 않으면 'futureReservations'에 추가
            const pastReservationsArray: PastReservation[] = [];
            const futureReservationsArray: FutureReservation[] = [];

            reservations.forEach((reservation: FutureReservation) => {
               const reservationDate = new Date(reservation.reservationDate);
               if (reservationDate < now) {
                  pastReservationsArray.push({
                     designerId: reservation.designer.designerId,
                     reservationId: reservation.id
                  });
               } else {
                  futureReservationsArray.push(reservation);
               }
            });

            // ✅ React 상태 업데이트
            setPastReservations(pastReservationsArray);
            setFutureReservations(futureReservationsArray);

            // 세팅 잘 됐는지 콘솔에 출력
            console.log("✅ 과거 예약 내역:", pastReservationsArray);
            console.log("✅ 미래 예약 내역:", futureReservationsArray);

         } catch (error) {
            console.error("❌ 예약 내역 불러오기 실패:", error);
         } finally {
            setIsLoading(false); // ✅ 데이터 로드 완료
         }
      };

      fetchData();
   }, []);

   // 데이터가 아직 로딩 중이면 로딩 화면 표시
   if (isLoading) {
      return <LoadingWrapper>로딩중...</LoadingWrapper>;   }


   if (!isMounted) return null;

   return (
      <Wrapper>
         <ProfileWrapper>
            <Title>
               <span style={{color:'white', fontWeight:'1000', fontSize:'20px'}}>확정된 컨설팅 예약</span>
               {/* <DDay>D-3</DDay> */}
            </Title>
            {/* FutureReservation 돌면서 'FutureReservation' 렌더링 */}
            {futureReservations.map((futureReservation, index) => {
               return <FutureReservation 
                           key={index} 
                           designerProfile={futureReservation.designer.profile}
                           designerName={futureReservation.designer.name}
                           address={futureReservation.designer.address}
                           region={futureReservation.designer.region}
                           meetingType={futureReservation.meetingType}
                           reservationDate={futureReservation.reservationDate}
                           meetUrl='https://meet.google.com/rqb-uemg-eeh'
                           reservationId={futureReservation.id}
                        />
            })}
         </ProfileWrapper>
         <ConsultingRecordsWrapper>
            <span style={{fontWeight:'bold', fontSize:'18px', width:'100%', textAlign:'start'}}>컨설팅 기록</span>

            {/* PastReservation 돌면서 'Profile' 렌더링 */}
            {pastReservations.map((pastReservation, index) => {
               return <Profile key={index} designerId={pastReservation.designerId} reservationId={pastReservation.reservationId} />
            })}
         </ConsultingRecordsWrapper>
         <Navbar />
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
   gap: 20px;
`

const Title = styled.div`
   width: 95%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
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
   padding-bottom: 70px;
`

const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   font-size: 20px;
   font-weight: bold;
`;