export const formatDateTime = (dateTimeString: string): string => {
   const date = new Date(dateTimeString);

   // 월, 일 추출
   const month = date.getMonth() + 1; // 월 (0부터 시작하므로 +1)
   const day = date.getDate(); // 일

   // 시간, 분 추출
   let hours = date.getHours();
   const minutes = date.getMinutes().toString().padStart(2, '0'); // 00 형식 유지

   // 오전/오후 판별 및 변환
   const period = hours >= 12 ? "오후" : "오전";
   if (hours > 12) hours -= 12; // 12시간제로 변환

   return `${month}월 ${day}일 ${period} ${hours}:${minutes}`;
};