import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getReservations = async () => {
   console.log("getReservations 호출");

   //header에 토큰 넣어서 호출
   try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/reservation`, {
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
         }
      });
      console.log("data: ", response.data);
      return response.data;

   } catch (error) {
      console.error(error);
   }
}  

export const getReservationDetail = async (reservationId: number) => {
   console.log("getReservationDetail 호출");
   try {
      const response = await axios.get(`${API_URL}/reservation/${reservationId}`);
      console.log("data: ", response.data);
      return response.data;
   }
   catch (error) {
      console.error(error);
   }
}