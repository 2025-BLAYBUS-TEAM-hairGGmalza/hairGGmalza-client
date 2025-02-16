import { useState } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

const options = [
  "서울 전체",
  "강남/청담/압구정",
  "홍대/연남/합정",
  "성수/건대",
];

export default function RegionFilter() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const toggleSelection = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  return (
    <>
      <Container>
        <Title>지역</Title>
        <OptionsWrapper>
          {options.map((option) => (
            <Button
              key={option}
              selected={selectedRegions.includes(option)}
              onClick={() => toggleSelection(option)}
            >
              {option}
            </Button>
          ))}
        </OptionsWrapper>
      </Container>
      <Divider />
    </>
  );
}

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

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#666" : "#ddd")};
  color: ${(props) => (props.selected ? "white" : "black")};
  &:hover {
    background-color: #bbb;
  }
`;
