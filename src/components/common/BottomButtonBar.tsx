import styled from "styled-components";
import { ReactNode } from "react";

interface BottomButtonBarProps {
  children: ReactNode; //  children을 props로 받음
}

const BottomButtonBar = ({ children }: BottomButtonBarProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BottomButtonBar;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: inherit; /*  부모의 너비(모바일 비율)에 맞춤 */
  max-width: 470px; /*  모바일 화면 비율 유지 */
  left: 50%;
  transform: translateX(-50%); /*  중앙 정렬 */
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between; /*  children이 양 끝에 배치되도록 설정 */
  background-color: black;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 100;
`;
