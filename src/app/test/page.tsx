"use client";

import { apiTest, loginTest } from '@/apis/apiTest'
import { getDesigner } from '@/apis/designerAPI';
import { postReservation } from '@/apis/payAPI';

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
         <button onClick={()=>postReservation(1, 4, "ONLINE", "2025-03-28T17:00")}>결제(예약) 테스트</button>
      </>
   )
}

export default TestPage