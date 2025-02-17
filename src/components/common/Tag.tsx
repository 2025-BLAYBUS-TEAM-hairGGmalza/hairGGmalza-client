import styled from "styled-components";

interface ModalProps {
   type: string;
   text: string;
}

const Tag: React.FC<ModalProps> = ({ type, text }) => {
   return (
      <Wrapper>
         {type === 'consulting' ? (
            <TagImg src='/images/consulting.svg' />
         ) : (
            <TagImg src='/images/scissors.svg' />
         )}
         <span>{text}</span>
      </Wrapper>
   );
};

export default Tag

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   font-weight: bold;
   padding: 6px 8px;
   border-radius: 6px;
   background: var(--black, #1E1E1E);
   color: var(--Chantilly-200, #F3D7E5);
   
`

const TagImg = styled.img`
   width: 13px;
   height: 13px;
   margin-right: 5px;
`