import React, { useState } from "react";
import styled from "styled-components";

const ToggleSection: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({
    개인정보_수집_제공: false,
    개인정보_보호_정책: false,
  });

  const toggleSection = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SectionContainer>
      <ToggleWrapper>
        <ToggleButton onClick={() => toggleSection("개인정보_수집_제공")}>
          개인정보 수집 제공
          <div>{open.개인정보_수집_제공 ? "▲" : "▼"}</div>
        </ToggleButton>
        {open.개인정보_수집_제공 && (
          <Content>
            <p>여기에 개인정보 수집 제공 내용이 들어갑니다.</p>
          </Content>
        )}
      </ToggleWrapper>

      <ToggleWrapper>
        <ToggleButton onClick={() => toggleSection("개인정보_보호_정책")}>
          개인정보 보호 정책 <div>{open.개인정보_보호_정책 ? "▲" : "▼"}</div>
        </ToggleButton>
        {open.개인정보_보호_정책 && (
          <Content>
            <p>여기에 개인정보 보호 정책 내용이 들어갑니다.</p>
          </Content>
        )}
      </ToggleWrapper>
    </SectionContainer>
  );
};

export default ToggleSection;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToggleWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #333;
  background: #f9f9f9;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e0e0e0;
  }
`;

const Content = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #ddd;
`;
