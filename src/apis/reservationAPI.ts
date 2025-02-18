import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getReservations = async (id: string) => {
   console.log("getReservations 호출");
   try {
      const response = await axios.get(`${API_URL}/reservation?memberId=${id}`);
      console.log("data: ", response.data);
      return response.data;
   }
   catch (error) {
      console.error(error);
   }
}