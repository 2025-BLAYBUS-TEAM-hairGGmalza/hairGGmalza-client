"use client";

import styled from "styled-components";
import DesignerHeader from "./DesignerHeader";
import MainHeader from "./MainHeader";
import SearchHeader from "./SearchHeader";
import PaymentHeader from "./PaymentHeader";

const Header = ({ where }: { where: string }) => {
  if (where === "main") {
    return (
      <HeaderWrapper>
        <HeaderComponent>
          <MainHeader />
        </HeaderComponent>
      </HeaderWrapper>
    );
  } else if (where === "designer") {
    return (
      <>
        <HeaderWrapper>
          <HeaderComponent className="headerComponent">
            <DesignerHeader text="디자이너 정보" />
          </HeaderComponent>
        </HeaderWrapper>
      </>
    );
  } else if (where === "search") {
    return (
      <HeaderWrapper>
        <HeaderComponent>
          <SearchHeader />
        </HeaderComponent>
      </HeaderWrapper>
    );
  } else if (where === "payment") {
    return (
      <HeaderWrapper>
        <HeaderComponent>
          <PaymentHeader text="결제하기" />
        </HeaderComponent>
      </HeaderWrapper>
    );
  } else if (where === "review") {
    return (
      <HeaderWrapper>
        <HeaderComponent>
          <DesignerHeader text="리뷰" />
        </HeaderComponent>
      </HeaderWrapper>
    );
  } else if (where === "alert") {
    return (
      <HeaderWrapper>
        <HeaderComponent>
          <DesignerHeader text="알림" />
        </HeaderComponent>
      </HeaderWrapper>
    );
  }
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderComponent = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
