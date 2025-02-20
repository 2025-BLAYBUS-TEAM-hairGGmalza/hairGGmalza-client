import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const postReservation = async (
   memberId: number,
   designerId: number,
   meetingType: string | null,
   reservationDate: string,
   paymentMethod: string,
   refundAccountBank: string = "",
   refundAccountNumber: string = "",
   message: string = ""
) => {
   console.log("📢 postReservation 호출");

   if (!API_URL) {
      console.error("❌ API_URL이 설정되지 않았습니다. .env.local 파일을 확인하세요.");
      return;
   }

   try {
      const response = await axios.post(`${API_URL}/reservation`, {
         memberId,
         designerId,
         meetingType,
         reservationDate,
         paymentMethod,
         refundAccountBank,
         refundAccountNumber,
         message
      },
      {
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
         }
      });

      console.log("✅ 예약 요청 성공:", response.data);


      //결제 수단이 카카오페이인 경우
      if (paymentMethod === "KAKAO_PAY") {
         // ✅ 성공 시 결제 페이지로 리다이렉트
         if (response.data?.data?.next_redirect_pc_url) {
            console.log("🔗 결제 페이지로 이동:", response.data.data.next_redirect_pc_url);
            window.location.href = response.data.data.next_redirect_pc_url; // 새 창에서 열기
         } else {
            console.error("❌ 결제 URL이 응답에 없습니다.");
         }
      } 
      //결제 수단이 계좌이체일경우
      else if (paymentMethod === "TRANSFER") {
         //status가 500이면 실패
         if (response.data.status === 500) {
            console.error("❌ 계좌이체 실패");
         }
         //status가 200이면 성공
         else if (response.data.status === 200) {
            console.log("✅ 계좌이체 성공");
            console.log(response.data);
            console.log(response.data.data);
            //결제 상세 내역 페이지로 이동
            window.location.href=`/reservation/${response.data.data.id}`//
         }
      }

      return response.data;
   } catch (error) {
      console.error("❌ 예약 요청 실패", error);
   }
};

export const postPGtoken = async (pg_token: string|null, reservationId: string) => {
   console.log("📢 postPGtoken 호출");

   if (!API_URL) {
      console.error("❌ API_URL이 설정되지 않았습니다. .env.local 파일을 확인하세요.");
      return;
   }

   try {
      const response = await axios.get(`${API_URL}/reservation/${reservationId}/pay/completed?pg_token=${pg_token}`);
      console.log("✅ 결제 완료:", response.data);
      // 결제 상세 내역 페이지로 이동
      window.location.href=`/reservation/${reservationId}`//

      return response.data;
   }
   catch {
      console.error("❌ 결제 실패");
   }
}
