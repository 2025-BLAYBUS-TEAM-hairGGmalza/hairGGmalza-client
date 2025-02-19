"use client";

import styled from "styled-components";
import { GoStarFill } from "react-icons/go";
import { Review } from "@/types/request";

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  return (
    <Wrapper>
      {reviews ? (
        reviews.map((review, index) => (
          <ReviewCard key={index} $backgroundImage={review.image}>
            <ReviewBottom>
              <ReviewStars>
                <GoStarFill style={{ color: "#ECBDD3", fontSize: "18px" }} />
                <Score>{review.point.toFixed(1)}</Score>
              </ReviewStars>
              <ReviewText>{review.text}</ReviewText>
            </ReviewBottom>
          </ReviewCard>
        ))
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};

export default ReviewsCarousel;

const Wrapper = styled.div`
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 5px;
`;

const ReviewCard = styled.div<{ $backgroundImage: string }>`
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  background-image: ${({ $backgroundImage }) => `url(${$backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
  scroll-snap-align: start;
`;

const ReviewBottom = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  padding: 10px;
  box-sizing: border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 90%);
`;

const ReviewText = styled.div`
  width: 100%;
  font-size: 12px;
  margin-top: 5px;
  color: white;
  line-height: 1.4;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReviewStars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

// ✅ 별점 숫자
const Score = styled.div`
  font-size: 16px;
  color: white;
  margin-left: 5px;
`;
