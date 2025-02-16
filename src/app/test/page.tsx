"use client";

import { apiTest } from '@/apis/apiTest'
import React from 'react'

const handleTestClick = () => {
   apiTest()
}

const TestPage = () => {
   return (
      <button onClick={handleTestClick}>api 테스트</button>
   )
}

export default TestPage