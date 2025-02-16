import { useState } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

const options = ["대면", "비대면", "대면/비대면"];

export default function ConsultingFilter() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Container>
        <Title>컨설팅유형</Title>
        <OptionsWrapper>
          {options.map((option) => (
            <Label key={option}>
              <RadioButton selected={selected === option} />
              {option}
              <HiddenInput
                type="radio"
                name="consultation"
                value={option}
                onChange={() => setSelected(option)}
              />
            </Label>
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
  gap: 3rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  cursor: pointer;
  gap: 1rem;
`;

const RadioButton = styled.span<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? "black" : "#ccc")};
`;

const HiddenInput = styled.input`
  display: none;
`;
