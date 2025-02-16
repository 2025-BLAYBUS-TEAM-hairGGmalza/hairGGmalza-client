import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  imageUrl?: string;
  name: string;
  location: string;
  description: string;
  services: { name: string; price: string }[];
}

const SearchCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  location,
  description,
  services,
}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProfileImage src={imageUrl || "/default-profile.png"} alt={name} />
        <Badge />
      </ImageWrapper>
      <Content>
        <Header>
          <Name>{name}</Name>
          <Location>{location}</Location>
        </Header>
        <Description>{description}</Description>
        <TagContainer>
          <Tag>✂ 대면/화상</Tag>
          <Tag>✂ 펌</Tag>
        </TagContainer>
        <ServiceList>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <ServiceName>{service.name}</ServiceName>
              <ServicePrice>{service.price}</ServicePrice>
            </ServiceItem>
          ))}
        </ServiceList>
      </Content>
    </CardContainer>
  );
};

export default SearchCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  width: 85%;
  height: fit-content;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #ccc;
`;

const Badge = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Location = styled.span`
  font-size: 12px;
  color: gray;
  margin-left: 6px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin: 4px 0;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  background: #e0e0e0;
  padding: 4px 6px;
  border-radius: 4px;
`;

const ServiceList = styled.div`
  width: 95%;
  height: 90px;

  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 6px;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background: #ddd;
  padding: 8px;
`;

const ServiceName = styled.span`
  font-weight: bold;
`;

const ServicePrice = styled.span`
  color: black;
`;
