import axios from "axios";

const API_URL = "https://hairgg.duckdns.org";

export const getMarked = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/favorite`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data.designerInfos;
  } catch (error) {
    console.log(error);
  }
};

export const postMarked = async (id: number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${API_URL}/favorite?designerId=${id}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};
