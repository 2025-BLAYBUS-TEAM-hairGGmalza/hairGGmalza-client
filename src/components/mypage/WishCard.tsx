import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import Tag from "../common/Tag";

interface WishCardProps {
  imageUrl: string;
  title: string;
  location: string;
  description: string;
}

const WishCard = (data: WishCardProps) => {
  return (
    <Wrapper>
      <CardContainer>
        <ImageWrapper>
          <Image src={data.imageUrl} alt={data.title} />
          <HeartIcon>
            <Image
              src="/images/pinkHeart.png"
              alt="찜"
              width={24}
              height={24}
            />
          </HeartIcon>
        </ImageWrapper>
      </CardContainer>
      <InfoContainer>
        <Title>
          {data.title} <Location>{data.location}</Location>
        </Title>
        <Description>{data.description}</Description>
        <ButtonContainer>
          <Tag type={"consulting"} text={"대면 / 화상"}></Tag>
          <Tag text={"탈염색"}></Tag>
        </ButtonContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default WishCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeartIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  /* padding: 12px; */
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
`;

const Location = styled.div`
  font-size: 14px;
  color: #888;
`;

const Description = styled.div`
  font-size: 14px;
  color: #989898;
  margin-top: 5px;
  margin-bottom: 10px;
  height: 30px;
`;

const ButtonContainer = styled.div`
  width: 93%;
  display: flex;
  gap: 8px;
`;

const TagButton = styled.button`
  background: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  color: #333;
  cursor: pointer;
  font-weight: bold;
  flex: 1;
`;
