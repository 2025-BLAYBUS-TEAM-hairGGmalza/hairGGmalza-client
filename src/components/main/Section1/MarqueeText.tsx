"use client";

import styled from "styled-components";

const MarqueeText = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        헤르츠와 함께 맞춤형 컨설팅으로 나만의 스타일을 찾아보세요! 헤르츠와
        함께 맞춤형 컨설팅 함께 맞춤형 컨설팅으로 나만의 스타일을 찾아보세요!
        헤르츠와 함께 맞춤형 컨설팅 함께 맞춤형 컨설팅으로 나만의 스타일을
        찾아보세요! 헤르츠와 함께 맞춤형 컨설팅 헤르츠와 함께 맞춤형 컨설팅 함께
        맞춤형 컨설팅으로 나만의 스타일을 찾아보세요! 헤르츠와 함께 맞춤형
        컨설팅 헤르츠와 함께 맞춤형 컨설팅 함께 맞춤형 컨설팅으로 나만의
        스타일을 찾아보세요! 헤르츠와 함께 맞춤형 컨설팅 헤르츠와 함께 맞춤형
        컨설팅 함께 맞춤형 컨설팅으로 나만의 스타일을 찾아보세요! 헤르츠와 함께
        맞춤형 컨설팅
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default MarqueeText;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #f7d7f4;
`;

const MarqueeContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  font-size: 1.5rem;
  padding: 5px 0;
  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
