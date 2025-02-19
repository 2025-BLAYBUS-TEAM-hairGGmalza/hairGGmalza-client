import MyReviewCard from "./MyReviewCard";

const reviews = [
  {
    profileImage: "/images/de1.webp",
    name: "이초 디자이너",
    location: "서울 강남구 압구정로 79길 강남/청담/압구정",
    rating: 4,
    images: ["/images/yo1.png", "/images/yo2.png"],
    reviewText:
      "원래 머릿결이 얇고 축 처져서 볼륨이 잘 안 사는 게 고민이었는데, 디자이너님께서 제 얼굴형이랑 모발 상태에 맞춰 레이어드 컷과 볼륨펌을 추천해 주셨어요. 또, 뿌리펌과 손질하는 방법까지 세세하게 알려주셔서 정말 도움이 많이 됐고, 이번에는 상담만 받았지만 다음에는 시술도 받아볼 생각이에요. 설명도 친절하시고 너무 만족스러워서 다음에도 또 방문하려고 합니다!",
  },
  {
    profileImage: "/images/de2.webp",
    name: "이아 디자이너",
    location: "서울 성동구 성수일로 6길 성수/건대",
    rating: 5,
    images: ["/images/yo3.png", "/images/yo4.png"],
    reviewText:
      "볼륨이 너무 안 살아서 고민이었는데, 가르마펌이랑 뿌리펌을 추천해 주셨고 손질하는 법까지 알려주셔서 정말 만족했어요. 이번엔 상담만 받았지만 다음엔 꼭 시술하러 갈 생각입니다.",
  },
];

const MyReviewList = () => {
  return (
    <div>
      {reviews.map((review, index) => (
        <MyReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default MyReviewList;
