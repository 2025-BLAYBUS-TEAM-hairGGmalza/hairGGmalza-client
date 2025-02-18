import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getReservations = async (memberId: string) => {
   console.log("getReservations 호출");
   try {
      const response = await axios.get(`${API_URL}/reservation?memberId=${memberId}`);
      console.log("data: ", response.data);
      return response.data;
   }
   catch (error) {
      console.error(error);
   }
}

export const getReservationDetail = async (reservationId: string) => {
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