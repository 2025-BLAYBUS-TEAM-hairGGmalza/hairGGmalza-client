import styled from "styled-components";

interface ModalProps {
  type?: string;
  text: string | undefined;
}

const Tag2: React.FC<ModalProps> = ({ type, text }) => {
  return (
    <Wrapper>
      {type === "consulting" ? (
        <TagImg src="/images/tag/1.svg" />
      ) : (
        <TagImg src="/images/tag/2.svg" />
      )}
      <span style={{ fontSize: "12px" }}>{text}</span>
    </Wrapper>
  );
};

export default Tag2;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  padding: 6px 8px;
  border-radius: 4px;
  background: var(--black, #eeeeee);
  color: var(--Chantilly-200, #989898);
  flex: 1;
`;

const TagImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
