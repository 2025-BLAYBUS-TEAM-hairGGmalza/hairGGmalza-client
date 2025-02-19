import axios from "axios";

export const getDesignerReviews = async (designerId: string) => {
   console.log("getDesignerReviews 호출");
   try {
      const response = await axios.get(`https://hairgg.duckdns.org/reviews?designerId=${designerId}`);
      console.log("getDesignerReviews: ", response.data);
      return response.data;
   }
   catch (error) {
      console.error(error);
   }
}