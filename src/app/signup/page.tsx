'use client';
import styled from "styled-components"

const SignUpPage = () => {
   return (
      <Wrapper>
         <SignUpHeader>가입하기</SignUpHeader>
         <Main>
            <PhraseOne>헤르츠와 함께 <br/> 나만의 스타일을 찾아보세요!</PhraseOne>
            <PhraseTwo>회원가입을 위해 개인정보 입력과 <br/> 약관동의가 필요합니다.</PhraseTwo>
            <FormContainer>
               <FormRow>

               </FormRow>
            </FormContainer>
         </Main>
      </Wrapper>
   )
}

export default SignUpPage

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
`

const SignUpHeader = styled.div`
   width: 100%;
   min-height: 70px;
   font-size: 24px;
   font-weight: bold;
   border-bottom: 0.5px solid #000000;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Main = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
`

const PhraseOne = styled.div`
   font-size: 24px;
   font-weight: bold;
`

const PhraseTwo = styled.div`
   font-size: 16px;
`

const FormContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
`

const FormRow = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 16px;
`

