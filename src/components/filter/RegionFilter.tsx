import styled from "styled-components";
import Divider from "../common/Divider";
import { FiMapPin } from "react-icons/fi";

const options = [
  "서울 전체",
  "강남/청담/압구정",
  "성수/건대",
  "홍대/연남/합정",
];

interface RegionFilterProps {
  selected: string | null;
  onChange: (regions: string | null) => void;
}

export default function RegionFilter({
  selected,
  onChange,
}: RegionFilterProps) {
  const toggleSelection = (region: string) => {
    if (selected === region) {
      onChange(null);
    } else {
      onChange(region);
      console.log(region);
    }
  };

  return (
    <>
      <Container>
        <Title>지역</Title>
        <OptionsWrapper>
          {options.map((option) => (
            <Button
              key={option}
              selected={selected?.includes(option) ?? false}
              onClick={() => toggleSelection(option)}
            >
              <FiMapPin />
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
  padding: 23px;
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
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "black" : "#EEEEEE")};
  color: ${(props) => (props.selected ? "#F3D7E5" : "#989898")};

  svg {
    font-size: 1.8rem;
  }
`;
