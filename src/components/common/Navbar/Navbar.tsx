"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import React, { useState } from "react";
import CenterModal from "../CenterModal";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const menuItems = [
    {
      name: "홈",
      path: "/",
    },
    {
      name: "예약조회",
      path: "/reservation",
      requiresAuth: true, // 로그인 필요
    },
    {
      name: "리포트",
      path: "/report",
      requiresAuth: true,
    },
    {
      name: "마이페이지",
      path: "/mypage",
      requiresAuth: true,
    },
  ];

  const handleNavigation = (path: string, requiresAuth?: boolean) => {
    const token = localStorage.getItem("token");

    if (requiresAuth && !token) {
      // 로그인 필요하지만 토큰이 없으면 모달 띄우기
      setIsLoginModalOpen(true);
    } else {
      // 정상적으로 페이지 이동
      router.push(path);
    }
  };

  return (
    <>
      <NavContainer>
        {menuItems.map((item) => (
          <NavItem
            key={item.name}
            onClick={() => handleNavigation(item.path, item.requiresAuth)}
            isActive={pathname === item.path}
          >
            <span>{item.name}</span>
          </NavItem>
        ))}
      </NavContainer>

      {/* 로그인 필요할 때 띄우는 모달 */}
      <CenterModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="로그인이 필요해요"
        login={true}
      />
    </>
  );
};

export default Navbar;


const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 470px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: transparent;
  backdrop-filter: blur(15px);

  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "black" : "#DCDCDC")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  svg {
    font-size: 24px;
    fill: ${(props) =>
      props.isActive ? "black" : "#DCDCDC"}; // Set fill color based on isActive
  }

  &:hover,
  &:focus {
    color: black;
    font-weight: bold;
  }
`;
