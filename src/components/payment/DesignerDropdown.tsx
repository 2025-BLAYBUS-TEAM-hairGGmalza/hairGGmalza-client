"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HairDesignerDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [consultingType, setConsultingType] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");


  useEffect(() => {
    //예약 정보 쿼리 스트링에서 가져오기
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    setConsultingType(urlParams.get("type") || "");

    //10시부터 12시까지는 오전, 그 이외는 오후를 앞에 붙이기. 그리고 뒤에 시간을 그대로 붙이기
    const timeStr = urlParams.get("time") || "";
    const hour = parseInt(timeStr.slice(0, 2), 10);
    const time = `${hour >= 10 && hour < 12 ? "오전" : "오후"} ${timeStr}`;
    setTime(time);

    setPrice(Number(urlParams.get("price")) || 0);

    //날짜는 월/일만, n월 n일 형식으로 표시(20240213 -> 2월 13일)
    const dateStr = urlParams.get("date") || "";
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    setDate(`${month}월 ${day}일`);
  }, []);

  return (
    <Container>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        디자이너 성함
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </DropdownHeader>

      {isOpen && (
        <DropdownContent>
          <Profile>
          {/* todo - 사진 변경 */}
            <ProfileImage src="/profile.jpg" alt="헤어 디자이너" /> 
            <ProfileInfo>
              <DesignerName>헤어 디자이너</DesignerName>
              <DesignerAddress>서울 강남구 압구정로79길</DesignerAddress>
              <DesignerTags>홍대/연남/합정</DesignerTags>
            </ProfileInfo>
          </Profile>

          <Divider />

          <InfoSection>
            <InfoTitle>상담유형</InfoTitle>
            <PriceContainer>
              <PriceBox>{consultingType}</PriceBox>
              <Price>{price}원</Price>
            </PriceContainer>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoTitle>예약시간</InfoTitle>
            <DateTime>
              <Date>{date}</Date>
              <Time>{time}</Time>
            </DateTime>
          </InfoSection>
        </DropdownContent>
      )}
    </Container>
  );
};

export default HairDesignerDropdown;

const Container = styled.div`
  width: 100%;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const DropdownContent = styled.div`
  background: white;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DesignerName = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const DesignerAddress = styled.p`
  font-size: 14px;
  color: #333;
`;

const DesignerTags = styled.span`
  font-size: 12px;
  color: gray;
`;

const Divider = styled.hr`
  margin: 12px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.p`
  font-size: 14px;
  color: #333;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 8px;
  border-radius: 6px;
`;

const PriceBox = styled.span`
  font-size: 14px;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const DateTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Time = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
