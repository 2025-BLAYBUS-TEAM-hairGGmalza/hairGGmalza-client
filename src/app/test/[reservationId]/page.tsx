"use client";

import { postPGtoken } from '@/apis/payAPI';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const PaymentSuccessPage = () => {
   const reservationId = String(useParams().reservationId);

      useEffect(() => {
         //쿼리에 pg_token이 있으면 결제 완료 페이지로 이동
         if (window.location.search.includes("pg_token")) {
            const pg_token = new URLSearchParams(window.location.search).get("pg_token");
            postPGtoken(pg_token, reservationId);
         }
      }, [reservationId]);

   return (
      <h1>결제 성공 페이지</h1>
   )
}

export default PaymentSuccessPage