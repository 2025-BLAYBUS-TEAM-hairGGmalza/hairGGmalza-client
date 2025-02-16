'use client';
import { useState } from "react";
import styled from "styled-components";

const SignUpPage = () => {
   const [name, setName] = useState('');
   const [gender, setGender] = useState<'female' | 'male'>('female');
   const [phone, setPhone] = useState('');
   const [agreeAll, setAgreeAll] = useState(false);
   const [agreeTerms, setAgreeTerms] = useState({
      term1: false,
      term2: false,
      term3: false,
      term4: false
   });

   // 약관 전체 동의 기능
   const handleAgreeAll = () => {
      const newAgreeAll = !agreeAll;
      setAgreeAll(newAgreeAll);
      setAgreeTerms({
         term1: newAgreeAll,
         term2: newAgreeAll,
         term3: newAgreeAll,
         term4: newAgreeAll
      });
   };

   // 개별 약관 체크 기능
   const handleAgreeTerm = (term: keyof typeof agreeTerms) => {
      const newTerms = { ...agreeTerms, [term]: !agreeTerms[term] };
      setAgreeTerms(newTerms);
      setAgreeAll(Object.values(newTerms).every(v => v));
   };

   // 가입하기 버튼 클릭 시
   const handleSubmit = () => {
      if (!name.trim()) {
         alert("이름을 입력해주세요.");
         return;
      }
      
      const phonePattern = /^010-\d{4}-\d{4}$/;
      if (!phonePattern.test(phone)) {
         alert("전화번호를 010-xxxx-xxxx 형식으로 입력해주세요.");
         return;
      }

      if (!agreeTerms.term1 || !agreeTerms.term2 || !agreeTerms.term4) {
         alert("필수 약관에 동의해주세요.");
         return;
      }
      console.log("이름:", name);
      console.log("성별:", gender);
      console.log("전화번호:", phone);
   };

   return (
      <Wrapper>
         <SignUpHeader>가입하기</SignUpHeader>
         <Main>
            <PhraseOne>헤르츠와 함께 <br/> 나만의 스타일을 찾아보세요!</PhraseOne>
            <PhraseTwo>회원가입을 위해 개인정보 입력과 <br/> 약관동의가 필요합니다.</PhraseTwo>
            <FormContainer>
               <FormRow>
                  <NameForm>
                     <InputLabel>이름</InputLabel>
                     <InputSlot 
                        type="text" 
                        placeholder="예약자"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </NameForm>
                  <GenderForm>
                     <InputLabel>성별</InputLabel>
                     <DropDown value={gender} onChange={(e) => setGender(e.target.value as 'female' | 'male')}>
                        <option value="female">여</option>
                        <option value="male">남</option>
                     </DropDown>
                  </GenderForm>
               </FormRow>
               <FormRow>
                  <PhoneForm>
                     <InputLabel>전화번호</InputLabel>
                     <InputSlot 
                        type="text" 
                        placeholder="010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                     />
                  </PhoneForm>
               </FormRow>

               <TermContainer>
                  <AgreeAll>
                     <input type="checkbox" checked={agreeAll} onChange={handleAgreeAll} />
                     <span>약관 전체동의</span>
                  </AgreeAll>
                  <Terms>
                     <Term>
                        <input type="checkbox" checked={agreeTerms.term1} onChange={() => handleAgreeTerm('term1')} />
                        <span>헤르츠 이용약관 동의 </span>
                        <Necessary>필수</Necessary>
                        <WholeText>본문 보기</WholeText>
                     </Term>
                     <Term>
                        <input type="checkbox" checked={agreeTerms.term2} onChange={() => handleAgreeTerm('term2')} />
                        <span>개인정보 수집 및 이용 동의</span>
                        <Necessary>필수</Necessary>
                        <WholeText>본문 보기</WholeText>
                     </Term>
                     <Term>
                        <input type="checkbox" checked={agreeTerms.term3} onChange={() => handleAgreeTerm('term3')} />
                        <span>제3자 정보제공 동의</span>
                        <Necessary style={{color:'#949494'}}>선택</Necessary>
                        <WholeText>본문 보기</WholeText>
                     </Term>
                     <Term>
                        <input type="checkbox" checked={agreeTerms.term4} onChange={() => handleAgreeTerm('term4')} />
                        <span>만 14세 이상입니다.</span>
                        <Necessary>필수</Necessary>
                     </Term>
                  </Terms>
               </TermContainer>
            </FormContainer>
            <button 
               style={{width: '100%', height: '55px', background: '#000', color: '#fff', fontSize: '18px', border: 'none', cursor: 'pointer'}}
               onClick={handleSubmit}
            >가입하기</button>
         </Main>
      </Wrapper>
   );
};

export default SignUpPage;

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const SignUpHeader = styled.div`
   width: 100%;
   min-height: 70px;
   font-size: 22px;
   font-weight: bold;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Main = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
   box-sizing: border-box;

   gap: 25px;
`

const PhraseOne = styled.div`
   font-size: 22px;
   font-weight: bold;
   //가운데 정렬
   text-align: center;
   margin-bottom: 10px;
`

const PhraseTwo = styled.div`
   font-size: 18px;
   width: 100%;

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
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 16px;
`

const NameForm = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const InputLabel = styled.div`
   font-size: 16px;
   font-weight: bold;
   width: 100%;
   margin-bottom: 5px;
`

const InputSlot = styled.input`
   width: 100%;
   font-size: 14px;
   height: 55px;
   padding: 0 15px;
   box-sizing: border-box;
   border: none;
   background: rgba(217, 217, 217, 0.40);
   color: #000;
   //placeholder 색상
   ::placeholder {
      color: #949494;
   }
`

const GenderForm = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const DropDown = styled.select`
   width: 100%;
   height: 55px;
   padding: 0 15px;
   border: none;
   background: rgba(217, 217, 217, 0.40);
`

const PhoneForm = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`


////////////////////// 약관동의 //////////////////////
const TermContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: rgba(217, 217, 217, 0.40);
   padding: 20px;
   box-sizing: border-box;
   gap: 15px;
   margin-top: 10px;
`

const AgreeAll = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;   
   font-size: 18px;
   color: #535353;

   input {
      width: 20px;
      height: 20px;

      //hover 시 색상 변경
      :hover {
         background: #000;
      }
   }
`

const Terms = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 16px;
   gap: 15px;
`

const Term = styled.div`
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 10px;
   color: #535353;

   input {
      width: 15px;
      height: 15px;

      //hover 시 색상 변경
      :hover {
         background: #000;
      }
   }
`

const WholeText = styled.div`
   font-size: 12px;
   color: #949494;
   //밑줄
   text-decoration: underline;
   cursor: pointer;

   //hover 시 색상 변경
   :hover {
      color: #000;
   }

   //맨 오른쪽에 정렬
   margin-left: auto;
`

const Necessary = styled.div`
   font-size: 12px;
   color: #7E3C3C;
`