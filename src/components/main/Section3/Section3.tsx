"use client";

import React from "react";
import Explain from "../Explain";
import ReviewsCarousel from "@/components/common/carousel/ReviewsCarousel";
import CarouselWrapper from "../CarouselWrapper";

const Section3 = () => {
  const data = [
    {
      image: "/images/re2.jpg",
      text: "머리가 금방 부스스해지고 정리가 안 되는 게 고민이었어요. 특히 아침마다 아이롱을 해야 하는데, 시간이 너무 오래 걸리고 금방 풀려서 스트레스였어요. 디자이너님이 자연스러운 웨이브 펌을 추천해 주셔서 상담만 받았는데, 설명이 너무 자세해서 다음에는 꼭 해볼 생각이에요!",
      point: 5,
    },
    {
      image: "/images/re3.jpg",
      text: "원래 그냥 무난한 갈색이었는데, 이번에 과감하게 카키 브라운으로 바꿔봤어요. 상담할 때 디자이너님이 붉은 기가 도는 컬러보다는 카키톤이 더 잘 어울릴 거라고 추천해 주셨는데, 하고 나서 보니까 진짜 찰떡! 햇빛 아래서 보면 더 오묘하고, 뭔가 고급스러워 보여서 너무 좋아요. 친구들이 머리 어디서 했냐고 물어보는 거 보니까 성공한 듯ㅋㅋㅋ",
      point: 5,
    },
    {
      image: "/images/re4.jpg",
      text: "항상 단발을 하고 싶었지만 어울릴까 걱정돼서 쉽게 결정을 못 했어요. 상담을 받아보니 제 얼굴형에는 턱선 아래로 떨어지는 단발이 잘 어울릴 거라고 추천해 주셔서 도전해 봤는데, 진짜 찰떡같이 잘 어울려서 놀랐어요! 관리 방법도 친절하게 알려주셔서 만족스럽습니다.",
      point: 5,
    },
  ];
  return (
    <>
      <Explain
        title={"나만의 스타일을 찾아보세요"}
        subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
      />
      <CarouselWrapper>
        <ReviewsCarousel reviews={data} />
      </CarouselWrapper>
    </>
  );
};

export default Section3;
