"use client";

import { apiTest, loginTest, signUp } from '@/apis/loginAPI'
import { getDesigner } from '@/apis/designerAPI';

const handleTestClick = () => {
   apiTest()
}

const handleLoginTest = () => {
   loginTest()
}
// 
const TestPage = () => {

   return (
      <>
         <button onClick={handleTestClick}>api 테스트</button>
         <button onClick={handleLoginTest}>로그인 테스트</button>
         <button onClick={()=>getDesigner("4")}>getDesigner 테스트</button>
         {/* <button onClick={()=>postReservation(1, 4, "ONLINE", "2025-03-28T22:00")}>결제(예약) 테스트</button> */}
         <button onClick={()=>signUp("test", "M", "010-4303-8511")}>회원가입 테스트</button>
      </>
   )
}

export default TestPage