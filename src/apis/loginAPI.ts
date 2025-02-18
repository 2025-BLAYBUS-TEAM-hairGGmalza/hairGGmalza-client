import axios from "axios";

const BASE_URL = "https://hairgg.duckdns.org";
const REDIRECT_URI = "http://localhost:3000/main";
const CLIENT_ID = "541500219001-ftaggvf5pl3u4cbmr8fe0dq4rdm2bnv4.apps.googleusercontent.com";
const GOOGLE_LOGIN_LINK = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

export const apiTest = async () => {
   const response = await axios.get(`${BASE_URL}/reservation/test1`);
   console.log(response.data);
};

export const loginTest = async () => {
      window.location.href = GOOGLE_LOGIN_LINK;
};

export const sendCode = async (code: string|null) => {
   console.log("sendCode 호출");
   console.log(code);
   const response = await axios.post(`${BASE_URL}/login`, {
         code : code
      });
   console.log(response.data);
}

export const newSendCode = async (code: string|null) => {
   const response = await axios.post(`${BASE_URL}/login?code=${code}`);
   console.log(response.data);
}


