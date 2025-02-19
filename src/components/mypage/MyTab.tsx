"use client";

import React, { useState } from "react";
import styled from "styled-components";
import MyReviewList from "./MyReviewList";

const MyTab = () => {
  const [activeTab, setActiveTab] = useState<"saved" | "reviews">("saved");

  return (
    <Container>
      {/* 탭 메뉴 */}
      <TabContainer>
        <TabButton
          active={activeTab === "saved"}
          onClick={() => setActiveTab("saved")}
        >
          나의 저장
        </TabButton>
        <TabButton
          active={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          작성한 리뷰
        </TabButton>
      </TabContainer>

      {/* 콘텐츠 영역 */}
      <Content>
        {activeTab === "saved" ? <SavedList /> : <MyReviewList />}
      </Content>
    </Container>
  );
};

export default MyTab;

// 📌 "나의 저장" 리스트 컴포넌트
const SavedList = () => {
  return (
    <Grid>
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}>
          <ImagePlaceholder />
          <CardTitle>헤어 디자이너</CardTitle>
          <CardSubtitle>트렌디한 감성, 섬세한 손길로 새로운 모습</CardSubtitle>
          <TagContainer>
            <Tag>💄 데미/화장</Tag>
            <Tag>💇‍♀️ 탐험적</Tag>
          </TagContainer>
        </Card>
      ))}
    </Grid>
  );
};

// 📌 스타일 정의
const Container = styled.div`
  width: 100%;
  background: white;
  color: black;
  padding-bottom: 50px;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const TabButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 12px 0;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-bottom: ${({ active }) => (active ? "3px solid black" : "none")};
  background: none;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Card = styled.div`
  background: #f8f8f8;
  padding: 12px;
  border-radius: 10px;
  text-align: center;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100px;
  background: #ddd;
  border-radius: 8px;
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
`;

const CardSubtitle = styled.div`
  font-size: 12px;
  color: gray;
  margin-top: 4px;
`;

const TagContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const Tag = styled.div`
  background: #e0e0e0;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
`;
