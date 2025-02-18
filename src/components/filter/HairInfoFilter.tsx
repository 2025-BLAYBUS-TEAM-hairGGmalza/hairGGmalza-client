import styled from "styled-components";

interface HairInfo {
  concerns: string[];
  length: string | null;
  condition: string | null;
}

interface HairInfoFilterProps {
  selected: HairInfo | null;
  onChange: (value: HairInfo | null) => void;
}

const HAIR_CONCERNS = [
  "스타일 변화",
  "얼굴형 커버",
  "체형 커버",
  "헤어 트렌드",
  "탈/염색 컬러",
  "모발 손상/관리",
  "두피 케어",
  "스타일링 방법",
];

const HAIR_LENGTHS = ["숏컷", "단발", "중단발", "장발"];
const HAIR_CONDITIONS = ["건강", "보통", "손상", "극손상"];

const DEFAULT_HAIR_INFO: HairInfo = {
  concerns: ["스타일 변화", "모발 손상/관리"],
  length: "중단발",
  condition: "손상",
};

const HairInfoFilter = ({ selected, onChange }: HairInfoFilterProps) => {
  const handleSelectConcern = (concern: string) => {
    if (!selected) return; // selected가 null이면 아무 동작 안 함
    const isSelected = selected.concerns.includes(concern);
    if (isSelected) {
      onChange({
        ...selected,
        concerns: selected.concerns.filter((item) => item !== concern),
      });
    } else if (selected.concerns.length < 3) {
      onChange({ ...selected, concerns: [...selected.concerns, concern] });
    }
  };

  const handleSelectLength = (length: string) => {
    onChange(
      selected
        ? { ...selected, length }
        : { concerns: [], length, condition: null }
    );
  };

  const handleSelectCondition = (condition: string) => {
    onChange(
      selected
        ? { ...selected, condition }
        : { concerns: [], length: null, condition }
    );
  };

  const loadMyHairInfo = () => {
    if (JSON.stringify(selected) === JSON.stringify(DEFAULT_HAIR_INFO)) {
      onChange(null); // 초기화할 때 null 설정
    } else {
      onChange(DEFAULT_HAIR_INFO);
    }
  };

  return (
    <Container>
      <Title>헤어정보</Title>
      <SectionWrapper>
        <Section>
          <Header>
            <SectionTitle>헤어고민</SectionTitle>
            <Subtitle>최대 3개 선택</Subtitle>
          </Header>
          <OptionsWrapper>
            {HAIR_CONCERNS.map((concern) => (
              <Option
                key={concern}
                selected={
                  selected ? selected.concerns.includes(concern) : false
                }
                onClick={() => handleSelectConcern(concern)}
              >
                {concern}
              </Option>
            ))}
          </OptionsWrapper>
        </Section>

        <Section>
          <SectionTitle>모발 길이</SectionTitle>
          <OptionsWrapper>
            {HAIR_LENGTHS.map((length) => (
              <Option
                key={length}
                selected={selected ? selected.length === length : false}
                onClick={() => handleSelectLength(length)}
              >
                {length}
              </Option>
            ))}
          </OptionsWrapper>
        </Section>

        <Section>
          <SectionTitle>모발 상태</SectionTitle>
          <OptionsWrapper>
            {HAIR_CONDITIONS.map((condition) => (
              <Option
                key={condition}
                selected={selected ? selected.condition === condition : false}
                onClick={() => handleSelectCondition(condition)}
              >
                {condition}
              </Option>
            ))}
          </OptionsWrapper>
        </Section>
      </SectionWrapper>

      <LoadButton onClick={loadMyHairInfo}>
        <RadioButton
          selected={
            JSON.stringify(selected) === JSON.stringify(DEFAULT_HAIR_INFO)
          }
        />
        <span>나의 헤어정보 불러오기</span>
      </LoadButton>
    </Container>
  );
};

export default HairInfoFilter;

const Container = styled.div`
  width: 100%;
  padding: 23px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 80%;
  padding: 2.2rem;
  gap: 2rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

const Subtitle = styled.span`
  font-size: 1.3rem;
  color: gray;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Option = styled.div<{ selected: boolean }>`
  padding: 10px 16px;
  font-size: 1.5rem;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "black" : "#e0e0e0")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  border: ${({ selected }) => (selected ? "black" : "none")};
`;

const LoadButton = styled.button`
  padding: 10px;
  font-size: 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioButton = styled.span<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${(props) => (props.selected ? "black" : "white")};
`;
