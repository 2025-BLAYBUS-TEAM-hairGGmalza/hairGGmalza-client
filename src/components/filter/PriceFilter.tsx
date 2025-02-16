import { useState } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

const PriceFilter = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>("전체");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const isCustomInput = selectedPrice === "직접입력";

  const handleSelect = (price: string) => {
    setSelectedPrice(price);
    if (price !== "직접입력") {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  return (
    <>
      <Container>
        <Title>가격대</Title>
        <OptionsWrapper>
          {["전체", "1만원 이하", "2만원 이하", "3만원 이하", "직접입력"].map(
            (price) => (
              <Option key={price} onClick={() => handleSelect(price)}>
                <RadioButton selected={selectedPrice === price} />
                <Label>{price}</Label>
              </Option>
            )
          )}
        </OptionsWrapper>
        <InputContainer>
          <Input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="최소 가격"
            disabled={!isCustomInput}
          />
          <span> ~ </span>
          <Input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="최대 가격"
            disabled={!isCustomInput}
          />
          <ApplyButton disabled={!isCustomInput}>적용</ApplyButton>
        </InputContainer>
      </Container>
      <Divider />
    </>
  );
};

export default PriceFilter;

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
  gap: 2rem;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 80px;
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
`;

const ApplyButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
