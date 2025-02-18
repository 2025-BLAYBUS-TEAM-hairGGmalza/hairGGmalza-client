import styled from "styled-components";
import Divider from "../common/Divider";

interface ConsultingFilterProps {
  selected: string | null;
  onChange: (value: string | null) => void;
}

const options = ["대면", "화상", "대면/화상"];

const ConsultingFilter: React.FC<ConsultingFilterProps> = ({
  selected,
  onChange,
}) => {
  const handleSelect = (option: string) => {
    onChange(selected === option ? null : option);
  };

  return (
    <>
      <Container>
        <Title>컨설팅유형</Title>
        <OptionsWrapper>
          {options.map((option) => (
            <Option
              key={option}
              selected={selected === option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </Option>
          ))}
        </OptionsWrapper>
      </Container>
      <Divider />
    </>
  );
};

export default ConsultingFilter;

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
