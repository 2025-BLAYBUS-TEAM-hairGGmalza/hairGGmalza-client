import axios from "axios";

const BASE_URL = "http://3.39.226.144";

export const apiTest = async () => {
   const response = await axios.get(`${BASE_URL}/reservation/test1`);
   console.log(response.data);
};