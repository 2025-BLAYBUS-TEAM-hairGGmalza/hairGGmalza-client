"use client";

import { postPGtoken } from '@/apis/payAPI';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import styled from 'styled-components';

const PaymentSuccessPage = () => {
   const reservationId = String(useParams().reservationId);

      useEffect(() => {
         //쿼리에 pg_token이 있으면 결제 완료 페이지로 이동
         if (window.location.search.includes("pg_token")) {
            const pg_token = new URLSearchParams(window.location.search).get("pg_token");
            postPGtoken(pg_token, reservationId);
         }
         else {
            console.error("❌ pg_token이 없습니다.");
         }
      }, [reservationId]);

   return (
      <Wrapper>
         <h1>결제 중이에요...</h1>
      </Wrapper>
   )
}

export default PaymentSuccessPage

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   font-size: 10px;
`