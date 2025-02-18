import { useState, useEffect } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

interface PriceFilterProps {
  minPrice: number | null;
  maxPrice: number | null;
  onChangePrice: (min: number | null, max: number | null) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onChangePrice,
}) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [customMin, setCustomMin] = useState(minPrice ? String(minPrice) : "");
  const [customMax, setCustomMax] = useState(maxPrice ? String(maxPrice) : "");
  const isCustomInput = selectedPrice === "직접입력";

  // 초기화될 때 선택된 옵션 및 입력값도 리셋
  useEffect(() => {
    if (minPrice === null && maxPrice === null) {
      setSelectedPrice(null);
      setCustomMin("");
      setCustomMax("");
    }
  }, [minPrice, maxPrice]);

  const handleSelect = (price: string) => {
    setSelectedPrice(price);
    if (price === "1만원 이하") {
      onChangePrice(0, 10000);
    } else if (price === "2만원 이하") {
      onChangePrice(0, 20000);
    } else if (price === "3만원 이하") {
      onChangePrice(0, 30000);
    } else if (price === "직접입력") {
      onChangePrice(
        customMin ? Number(customMin) : null,
        customMax ? Number(customMax) : null
      );
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomMin(value);
    onChangePrice(
      value ? Number(value) : null,
      customMax ? Number(customMax) : null
    );
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomMax(value);
    onChangePrice(
      customMin ? Number(customMin) : null,
      value ? Number(value) : null
    );
  };

  return (
    <>
      <Container>
        <Title>가격대</Title>
        <OptionsWrapper>
          {["1만원 이하", "2만원 이하", "3만원 이하", "직접입력"].map(
            (price) => (
              <Option key={price} onClick={() => handleSelect(price)}>
                <Button selected={selectedPrice === price}>{price}</Button>
              </Option>
            )
          )}
        </OptionsWrapper>
        {isCustomInput && (
          <InputContainer>
            <Input
              type="number"
              value={customMin}
              onChange={handleMinChange}
              placeholder="최소 가격"
            />
            <span> ~ </span>
            <Input
              type="number"
              value={customMax}
              onChange={handleMaxChange}
              placeholder="최대 가격"
            />
          </InputContainer>
        )}
      </Container>
      <Divider />
    </>
  );
};

export default PriceFilter;

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

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Button = styled.button<{ selected: boolean }>`
  padding: 6px 12px;
  font-size: 1.6rem;
  background-color: ${({ selected }) => (selected ? "black" : "#ccc")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
`;
