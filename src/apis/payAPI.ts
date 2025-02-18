import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const postReservation = async (memberId: number, designerId: number, meetingType: "ONLINE" | "OFFLINE", reservationDate: string) => {
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
         reservationDate
      });

      console.log("✅ 예약 요청 성공:", response.data);

      // ✅ 성공 시 결제 페이지로 리다이렉트
      if (response.data?.data?.next_redirect_pc_url) {
         console.log("🔗 결제 페이지로 이동:", response.data.data.next_redirect_pc_url);
         // window.location.href=` ${response.data.data.next_redirect_pc_url}`// 새 창에서 열기
         window.open(response.data.data.next_redirect_pc_url, "_blank"); // 새 창에서 열기
      } else {
         console.error("❌ 결제 URL이 응답에 없습니다.");
      }

      return response.data;
   }
   catch {
      console.error("❌ 예약 요청 실패");
   }
};