"use client";

import React, { useState } from "react";
import styled from "styled-components";
import MyReviewList from "./MyReviewList";
import MyWishList from "./MyWishList";

const MyTab = () => {
  const [activeTab, setActiveTab] = useState<"saved" | "reviews">("saved");

  return (
    <Container>
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

      <Content>
        {activeTab === "saved" ? <MyWishList /> : <MyReviewList />}
      </Content>
    </Container>
  );
};

export default MyTab;

// const SavedList = () => {
//   return (
//     <Grid>
//       {Array.from({ length: 4 }).map((_, index) => (
//         <Card key={index}>
//           <ImagePlaceholder />
//           <CardTitle>헤어 디자이너</CardTitle>
//           <CardSubtitle>트렌디한 감성, 섬세한 손길로 새로운 모습</CardSubtitle>
//           <TagContainer>
//             <Tag>💄 데미/화장</Tag>
//             <Tag>💇‍♀️ 탐험적</Tag>
//           </TagContainer>
//         </Card>
//       ))}
//     </Grid>
//   );
// };

const Container = styled.div`
  width: 100%;
  background: white;
  color: black;
  padding-bottom: 50px;
  overflow-x: hidden;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const TabButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 12px 0px;
  font-size: 16px;
  border: none;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
  background: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 16px;
`;
