import React from "react";
import styled from "styled-components";

interface SearchCardProps {
  designerId: number;
  name: string;
  region: string;
  address: string;
  profile: string;
  description: string;
  offlinePrice: number;
  onlinePrice: number;
  meetingType: string;
  majors: string[];
}

const SearchCard: React.FC<SearchCardProps> = ({
  name,
  region,
  profile,
  description,
  offlinePrice,
  onlinePrice,
  meetingType,
  majors,
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProfileImage
          src={profile !== "null" ? profile : "/images/hairmodel.png"}
          alt={name}
        />
      </ImageWrapper>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Location>{region}</Location>
        </Header>
        <Description>{description.trim() || "설명이 없습니다."}</Description>
        <TagContainer>
          <Tag>
            {meetingType === "BOTH"
              ? "💬 대면/화상"
              : meetingType === "OFFLINE"
              ? "🏢 대면"
              : "💻 화상"}
          </Tag>
          {majors.length > 0 ? (
            majors.map((major, index) => <Tag key={index}>✂ {major}</Tag>)
          ) : (
            <Tag>✂ 커트</Tag>
          )}
        </TagContainer>
        <ServiceList>
          <ServiceItem>
            <ServiceName>대면 상담</ServiceName>
            <ServicePrice>{offlinePrice.toLocaleString()}원</ServicePrice>
          </ServiceItem>
          <ServiceItem>
            <ServiceName>온라인 상담</ServiceName>
            <ServicePrice>{onlinePrice.toLocaleString()}원</ServicePrice>
          </ServiceItem>
        </ServiceList>
      </Content>
    </CardContainer>
  );
};

export default SearchCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 85%;
  height: fit-content;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #ccc;
`;

// const Badge = styled.div`
//   position: absolute;
//   bottom: 4px;
//   right: 4px;
//   width: 14px;
//   height: 14px;
//   background: white;
//   border-radius: 50%;
// `;

const Content = styled.div`
  flex: 1;
  margin-left: 15px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Location = styled.div`
  font-size: 16px;
  color: gray;
  margin-left: 6px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  font-size: 16px;
  color: #666;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  width: 90px;
  font-size: 16px;
  background: black;
  color: #f3d7e5;
  padding: 8px 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ServiceList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background: #ddd;
  align-items: center;
  padding: 8px 10px;
  text-align: center;
  border-radius: 8px;
`;

const ServiceName = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const ServicePrice = styled.div`
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
`;
