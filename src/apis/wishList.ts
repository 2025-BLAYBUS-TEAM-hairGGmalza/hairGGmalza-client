import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getMarked = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/favorite`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response.data.data.designerInfos);
    return response.data.data.designerInfos;
  } catch (error) {
    console.log(error);
  }
};
