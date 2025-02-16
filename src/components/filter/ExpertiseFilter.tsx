import { useState } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

const OPTIONS = [
  "컷",
  "펌",
  "염색",
  "탈염색",
  "펌",
  "염색",
  "탈염색",
  "펌",
  "염색",
  "탈염색",
];

const ExpertiseFilter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else if (selected.length < 2) {
      setSelected([...selected, option]);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Title>전문분야</Title>
          <Subtitle>최대 2개 선택</Subtitle>
        </Header>
        <OptionsWrapper>
          {OPTIONS.map((option) => (
            <Option
              key={option}
              selected={selected.includes(option)}
              onClick={() => handleSelect(option)}
            >
              ✂️ {option}
            </Option>
          ))}
        </OptionsWrapper>
      </Container>
      <Divider />
    </>
  );
};

export default ExpertiseFilter;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.span`
  font-size: 1.4rem;
  color: gray;
`;

const OptionsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Option = styled.button<{ selected: boolean }>`
  padding: 8px 14px;
  font-size: 1.6rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "black" : "#ddd")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s ease;
`;
