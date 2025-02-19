import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getMarked = async () => {
  const token = localStorage.getItem("access");

  try {
    const response = await axios.get(`${API_URL}/designers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
