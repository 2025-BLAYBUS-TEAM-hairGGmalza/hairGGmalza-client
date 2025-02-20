import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getMember = async () => {
   console.log("getMember 호출");

   //header에 토큰 넣어서 호출
   try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/checkMember`, {
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