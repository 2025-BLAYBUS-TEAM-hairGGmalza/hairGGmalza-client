"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { BsPeople, BsCardChecklist } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "홈", icon: <FiHome />, path: "/" },
    { name: "예약조회", icon: <BsPeople />, path: "/reservation" },
    { name: "리포트", icon: <BsCardChecklist />, path: "/report" },
    { name: "마이페이지", icon: <RxHamburgerMenu />, path: "/mypage" },
  ];

  return (
    <NavContainer>
      {menuItems.map((item) => (
        <NavItem
          key={item.name}
          onClick={() => router.push(item.path)}
          isActive={pathname === item.path}
        >
          {item.icon}
          <span>{item.name}</span>
        </NavItem>
      ))}
    </NavContainer>
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
  background: #f5f5f5;
  border-top: 1px solid #ddd;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "black" : "#999")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  svg {
    font-size: 24px;
  }

  &:hover,
  &:focus {
    color: black;
    font-weight: bold;
  }
`;
