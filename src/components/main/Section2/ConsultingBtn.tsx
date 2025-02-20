"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

const ConsultingBtn = () => {
  const router = useRouter();

  const handleFilter = (type: string) => {
    router.push(`/search?filter=${type}`);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>원하는 방법대로 컨설팅 받아보세요</Title>
        <Subtitle>후기가 보장하는 완벽 맞춤 헤어 컨설팅</Subtitle>
      </TitleWrapper>
      <ButtonContainer>
        <FilterButton onClick={() => handleFilter("offline")}>
          <img
            src="/images/chat.svg"
            alt="채팅 아이콘"
            width={30}
            height={30}
          />
          대면 컨설팅
        </FilterButton>
        <FilterButton onClick={() => handleFilter("online")}>
          <img src="/images/pad.svg" alt="패드 아이콘" width={30} height={30} />{" "}
          화상 컨설팅
        </FilterButton>
      </ButtonContainer>
    </Container>
  );
};

export default ConsultingBtn;

const Container = styled.div`
  height: 25%;
  background: #1a1919;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #b5b5b5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f7d7f4;
  color: black;
  padding: 15px 30px;
  border-radius: 8px;
  border: none;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #e89cc9;
  }
`;
