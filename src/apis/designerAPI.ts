import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getDesigner = async (id: string) => {
   const response = await axios.get(`${API_URL}/designers/${id}`);
   console.log(response.data);
   return response.data;
}