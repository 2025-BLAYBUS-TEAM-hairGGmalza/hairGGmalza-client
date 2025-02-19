import styled from "styled-components";

interface ModalProps {
  type: string;
  text: string | undefined;
}

const Tag: React.FC<ModalProps> = ({ type, text }) => {
  return (
    <Wrapper>
      {type === "consulting" ? (
        <TagImg src="/images/consulting.svg" />
      ) : (
        <TagImg src="/images/scissors.svg" />
      )}
      <span style={{ fontSize: "14px" }}>{text}</span>
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 4px;
  background: var(--black, #1e1e1e);
  color: var(--Chantilly-200, #f3d7e5);
`;

const TagImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;
