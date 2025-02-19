import { MeetingRequest } from "@/types/request";
import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = "https://hairgg.duckdns.org";

export const filterDesigner = async (body: MeetingRequest) => {
  try {
    const response = await axios.post(`${API_URL}/designers`, body);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
