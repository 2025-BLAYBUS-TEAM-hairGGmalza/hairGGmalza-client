import React from "react";
import styled from "styled-components";

interface ReviewCardProps {
  profileImage: string;
  name: string;
  location: string;
  rating: number;
  images: string[];
  reviewText: string;
}

const MyReviewCard: React.FC<ReviewCardProps> = ({
  profileImage,
  name,
  location,
  rating,
  images,
  reviewText,
}) => {
  return (
    <Card>
      <Header>
        <Profile>
          <ProfileImage src={profileImage} alt={`${name} 프로필`} />
          <ProfileInfo>
            <Name>{name}</Name>
            <Location>{location}</Location>
          </ProfileInfo>
        </Profile>
      </Header>

      <Rating>{renderStars(rating)}</Rating>

      <ImageContainer>
        {images.map((src, index) => (
          <ReviewImage key={index} src={src} alt={`리뷰 이미지 ${index + 1}`} />
        ))}
      </ImageContainer>

      <ReviewText>{reviewText}</ReviewText>
    </Card>
  );
};

export default MyReviewCard;

// ⭐️ 별점 렌더링 함수
const renderStars = (rating: number) => {
  return (
    <StarWrapper>
      <div>{rating.toFixed(1)}</div>
      {[...Array(5)].map((_, i) => (
        <StarImage
          key={i}
          src={i < rating ? "/images/blackStar.png" : "/images/pinkStar.png"}
          alt="별점"
        />
      ))}
    </StarWrapper>
  );
};

// 📌 스타일 정의
const Card = styled.div`
  background: #eeeeee;
  padding: 16px;
  padding-bottom: 3px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Location = styled.div`
  font-size: 14px;
  color: gray;
`;

const Rating = styled.div`
  font-size: 18px;
  margin: 8px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0;
`;

const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.5;
  margin-top: 12px;
`;

const StarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3px;
  div {
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const StarImage = styled.img`
  width: 20px;
  height: 18px;
  margin-bottom: 0.5rem;
`;
