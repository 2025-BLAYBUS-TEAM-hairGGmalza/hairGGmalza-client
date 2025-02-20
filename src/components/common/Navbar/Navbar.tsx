"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { BsPeople, BsCardChecklist } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import CenterModal from "../CenterModal";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    const handleNavigation = (path: string, requiresAuth?: boolean) => {
      const token = localStorage.getItem("token");
    
      if (requiresAuth && !token) {
        setIsLoginModalOpen(true); // 로그인 모달 열기
      } else {
        router.push(path); // 정상적으로 이동
      }
    };
    
  const menuItems = [
    {
      name: "홈",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 21 22"
          fill="none"
        >
          <path
            d="M1.09937 7.90947C0.867209 8.10031 0.733187 8.38544 0.734383 8.68596L0.781596 20.5471C0.783788 21.0978 1.23086 21.5431 1.78159 21.5431L7.50096 21.5431V14.8512H13.501V21.5431L19.2655 21.5431C19.8193 21.5431 20.2676 21.0929 20.2654 20.5391L20.2182 8.67783C20.2171 8.38197 20.0849 8.10181 19.8574 7.91271L11.1632 0.68769C10.7942 0.381108 10.2596 0.379677 9.88902 0.684282L1.09937 7.90947Z"
            fill="currentColor" // Use 'currentColor' to inherit the color from the parent
          />
        </svg>
      ),
      path: "/",
      
    },
    {
      name: "예약조회",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8203 6.34363H11.1797V4.04541H9.17966V6.34363H6.5C5.39974 6.34363 4.507 7.23208 4.50004 8.33069L4.5 8.34363V11H26.5V8.34363C26.5 7.23906 25.6046 6.34363 24.5 6.34363H21.8203V4.04541H19.8203V6.34363ZM26.5 13H4.5V23.9545C4.5 25.0591 5.39543 25.9545 6.5 25.9545H24.5C25.6046 25.9545 26.5 25.0591 26.5 23.9545V13ZM14.3317 22.7511L20.8235 16.8559L19.479 15.3753L14.3317 20.0495L11.5211 17.4971L10.1765 18.9777L14.3317 22.7511Z"
            fill="currentColor" // Use 'currentColor' to inherit the color from the parent
          />
        </svg>
      ),
      path: "/reservation",
      requiresAuth: true 
    },
    {
      name: "리포트",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.66211 4C7.10982 4 6.66211 4.44772 6.66211 5V25C6.66211 25.5523 7.10982 26 7.66211 26H23.3383C23.8905 26 24.3383 25.5523 24.3383 25V5C24.3383 4.44772 23.8905 4 23.3383 4H7.66211ZM21.3964 9.7865H9.60395V7.7865H21.3964V9.7865ZM21.3964 13.8682H9.60395V11.8682H21.3964V13.8682ZM9.60395 17.9498H16.5002V15.9498H9.60395V17.9498Z"
            fill="currentColor" // Use 'currentColor' to inherit the color from the parent
          />
        </svg>
      ),
      path: "/report",
      requiresAuth: true 
    },
    {
      name: "마이페이지",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            d="M11.7821 15.3446H10.7616C8.33704 15.3446 6.37158 17.31 6.37158 19.7346V24.9025C6.37158 25.5086 6.86295 26 7.46908 26H23.5312C24.1374 26 24.6287 25.5086 24.6287 24.9025V19.7346C24.6287 17.31 22.6633 15.3446 20.2387 15.3446H19.2182C18.13 15.9923 16.8585 16.3644 15.5002 16.3644C14.1418 16.3644 12.8703 15.9923 11.7821 15.3446Z"
            fill="currentColor" // Use 'currentColor' to inherit the color from the parent
          />
          <path
            d="M20.5848 9.0847C20.5848 11.8929 18.3084 14.1694 15.5002 14.1694C12.6919 14.1694 10.4155 11.8929 10.4155 9.0847C10.4155 6.2765 12.6919 4 15.5002 4C18.3084 4 20.5848 6.2765 20.5848 9.0847Z"
            fill="currentColor" // Use 'currentColor' to inherit the color from the parent
          />
        </svg>
      ),
      path: "/mypage",
      requiresAuth: true 
    },
  ];

  return (
    <>
    <NavContainer>
      {menuItems.map((item) => (
        <NavItem
          key={item.name}
          onClick={() => handleNavigation(item.path, item.requiresAuth)}          
          isActive={pathname === item.path}
        >
          {React.cloneElement(item.icon, {
            fillColor: pathname === item.path ? "black" : "#DCDCDC",
          })}
          <span>{item.name}</span>
        </NavItem>
      ))}

    </NavContainer>

                {/* 센터 모달 - 로그인하기 */}
                <CenterModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                title={"\n\n로그인이 필요해요"}
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
