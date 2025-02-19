"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Navbar from "../common/Navbar/Navbar";
import MyTab from "./MyTab";

const MyPage = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    account: false,
    hair: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>마이페이지</Title>
          <ProfileCard>
            <ProfileImageWrapper>
              <Image
                src="/images/hairmodel.png"
                alt="Profile"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </ProfileImageWrapper>
            <ProfileInfo>
              <UserName>구글 닉네임</UserName>
              <UserEmail>pjy0519@gmail.com</UserEmail>
            </ProfileInfo>
          </ProfileCard>

          <Accordion>
            <AccordionItem
              onClick={() => toggleSection("account")}
              isOpen={openSections.account}
            >
              <Header>
                <AccordionTitle>계정 정보</AccordionTitle>
                <Arrow isOpen={openSections.account}>▼</Arrow>
              </Header>
              <Content isOpen={openSections.account}>
                <InfoText>이름 | 홍길동</InfoText>
                <InfoText>성별 | 남성</InfoText>
                <InfoText>핸드폰 번호 | 010-1234-5678</InfoText>
              </Content>
            </AccordionItem>

            <AccordionItem2
              onClick={() => toggleSection("hair")}
              isOpen={openSections.hair}
            >
              <Header>
                <AccordionTitle>헤어 정보</AccordionTitle>
                <Arrow isOpen={openSections.hair}>▼</Arrow>
              </Header>
              <Content isOpen={openSections.hair}>
                <InfoText>헤어고민 | 스타일 변화, 모발 손상/관리</InfoText>
                <InfoText>모발 길이 | 중단발</InfoText>
                <InfoText>모발 상태 | 손상</InfoText>
              </Content>
            </AccordionItem2>
          </Accordion>
        </Wrapper>
        <MyTab />
        <Navbar />
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100%;
  background: #181818;
  color: white;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
`;

const ProfileImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const ProfileInfo = styled.div`
  margin-left: 12px;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: gray;
`;

const Accordion = styled.div`
  margin-top: 20px;
`;

const AccordionItem = styled.div<{ isOpen?: boolean }>`
  background: #eaeaea;
  border-radius: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "50px")};
  padding: 12px;
`;

const AccordionItem2 = styled(AccordionItem)`
  background: #f8ebf1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const Arrow = styled.div<{ isOpen?: boolean }>`
  font-size: 14px;
  color: black;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const Content = styled.div<{ isOpen?: boolean }>`
  color: black;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "150px" : "0")};
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  overflow: hidden;
  margin-top: ${({ isOpen }) => (isOpen ? "10px" : "0")};
`;

const InfoText = styled.div`
  font-size: 16px;
  padding: 5px 0;
`;
