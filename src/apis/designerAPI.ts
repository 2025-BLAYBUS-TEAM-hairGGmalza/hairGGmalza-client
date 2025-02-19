import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = "https://hairgg.duckdns.org";

export const getDesigner = async (id: string) => {
   console.log("getDesigner 호출");
   try {
      const response = await axios.get(`${API_URL}/designers/${id}?page=1`);
      console.log(response.data);
      return response.data;
   }
   catch (error) {
      console.error(error);
   }
}