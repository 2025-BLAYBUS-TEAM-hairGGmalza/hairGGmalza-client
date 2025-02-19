import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <FooterWrapper>
      <LogoImg src="/Logo.png" onClick={() => console.log("d")} />

      <InfoSection>
        <InfoButton onClick={() => toggleSection("business")}>
          사업자 정보
          <FiChevronDown className={openSection === "business" ? "open" : ""} />
        </InfoButton>
        {openSection === "business" && (
          <InfoContent>사업자 정보 내용</InfoContent>
        )}

        <InfoButton onClick={() => toggleSection("legal")}>
          법적 고지사항
          <FiChevronDown className={openSection === "legal" ? "open" : ""} />
        </InfoButton>
        {openSection === "legal" && (
          <InfoContent>법적 고지사항 내용</InfoContent>
        )}
      </InfoSection>

      <Copyright>© 2025 hairGGmalza ALL RIGHTS RESERVED</Copyright>

      <PolicyLinks>
        <a href="#">개인정보처리방침</a> | <a href="#">이용약관</a>
      </PolicyLinks>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const LogoImg = styled.img`
  width: fit-content;
  height: 2.8rem;
  padding-bottom: 0;
  padding: 28px;
`;

const InfoSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2rem;
  gap: 1.5rem;
`;

const InfoButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
  width: 100%;
  .open {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
`;

const InfoContent = styled.p`
  font-size: 14px;
  color: #666;
  margin-left: 10px;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #aaa;
  padding: 0 28px;
  padding-top: 2rem;
`;

const PolicyLinks = styled.div`
  font-size: 14px;
  color: #666;
  padding: 0 28px;
  padding-bottom: 2rem;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`;
