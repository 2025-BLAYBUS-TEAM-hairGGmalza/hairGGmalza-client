"use client";

import { apiTest, loginTest } from '@/apis/apiTest'
import React from 'react'

const handleTestClick = () => {
   apiTest()
}

const handleLoginTest = () => {
   loginTest()
}

const TestPage = () => {
   return (
      <>
         <button onClick={handleTestClick}>api 테스트</button>
         <button onClick={handleLoginTest}>로그인 테스트</button>
      </>
   )
}

export default TestPage