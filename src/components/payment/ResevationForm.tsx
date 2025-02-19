"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../common/Header/Header";
import Divider from "../common/Divider";
import HairDesignerDropdown from "./DesignerDropdown";
import BottomButtonBar from "../common/BottomButtonBar";
import ToggleSection from "./ToggleSection";
import { useParams, useRouter } from "next/navigation";
import { postReservation } from "@/apis/payAPI";

const banks: string[] = [
  "NH농협",
  "카카오뱅크",
  "KB국민",
  "토스뱅크",
  "신한",
  "우리",
  "IBK기업",
  "하나",
  "새마을",
  "부산",
  "iM뱅크",
  "케이뱅크",
  "신협",
  "우체국",
  "SC제일",
  "경남",
  "광주",
  "수협",
  "전북",
  "제주",
];

const ReservationForm: React.FC = () => {
  const [reservationName, setReservationName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("카카오페이");
  const [refundAccount, setRefundAccount] = useState("");
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [isMounted, setIsMounted] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const designerId = useParams().id;

  const accountNumber = "1002-858-1312312";

  const router = useRouter(); // useRouter 훅 사용

  const handleBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => alert("복사되었습니다!"));
  };

  useEffect(() => {
    if (reservationName && gender && phoneNumber && isChecked) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

    console.log(designerId);
    
  }, [reservationName, gender, phoneNumber, isChecked, designerId]);

  const handleSubmit = () => {
    if (!reservationName || !gender || !phoneNumber) {
      alert("모든 필수 입력 항목을 작성해주세요.");
      return;
    }

    if (!isChecked) {
      alert("예약 안내 사항을 확인해주세요.");
      return;
    }
    if (isFormValid) {
      console.log("✅ 예약 정보");
      //기본으로 들어가는 정보들
      console.log("예약자명:", reservationName);
      console.log("성별:", gender);
      console.log("전화번호:", phoneNumber);
      console.log("추가 정보:", extraInfo);
      console.log("결제 수단:", paymentMethod);
      console.log("선택한 은행:", selectedBank);
      console.log("환불 계좌:", refundAccount);
      console.log("이용 약관 동의:", isChecked ? "동의함" : "동의하지 않음");
      

      postReservation(1, 1, "ONLINE", "2022-02-13");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <Header where="payment" />
      <Container>
        <SectionContainer>
          <SectionTitle>예약정보</SectionTitle>
          <HairDesignerDropdown />
          <Label>예약 전 꼭 확인해주세요!</Label>
          <Notice>
            설팅 예약 시간 전, 10분 전까지 컨설팅을 준비해주세요. <br/>
            예약 당일 10분 이상 지각 시 노쇼로 처리될 수 있으며, <br/>소정의 수수료가 부과될 수 있습니다. <br/>
            컨설팅은 약 30분 소요되며, 종료 후 컨설팅 결과를 요약 리포트로 확인할 수 있어요.<br/>
          </Notice>
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <SectionTitle>예약자 정보</SectionTitle>
          <InputRow>
            <NameWrapper>
              <div>예약자명</div>
              <Input
                placeholder="예약자 성함"
                value={reservationName}
                onChange={(e) => setReservationName(e.target.value)}
              />
            </NameWrapper>
            <SelectWrapper>
              <div>성별</div>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">선택</option>
                <option value="여">여</option>
                <option value="남">남</option>
              </Select>
            </SelectWrapper>
          </InputRow>
          <Input
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <SectionTitle>추가 정보</SectionTitle>
          <SubText>
            예약 당일 10분 이상 지각 시 노쇼로 처리될 수 있습니다.{" "}
            <Required>*</Required>
          </SubText>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div>확인했습니다.</div>
          </CheckboxContainer>
          <SubText>
            헤어 고민이 있으신가요? <Optional>(선택)</Optional>
          </SubText>
          <TextArea
            placeholder="미리 디자이너가 염두해야 할 사항을 공유해주세요."
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <SectionTitle>결제 수단</SectionTitle>
          <PaymentButtonRow>
            <BtnWrapper>
              <PaymentButton
                selected={paymentMethod === "카카오페이"}
                onClick={() => setPaymentMethod("카카오페이")}
              >
                카카오페이
              </PaymentButton>
              <PaymentButton
                selected={paymentMethod === "계좌이체"}
                onClick={() => setPaymentMethod("계좌이체")}
              >
                계좌이체
              </PaymentButton>
            </BtnWrapper>
            <Label>입금계좌</Label>
            <AccountWrapper>
              <SubText>{accountNumber}</SubText>
              <div onClick={handleCopy}>복사</div>
            </AccountWrapper>
          </PaymentButtonRow>
        </SectionContainer>

        <Divider />

        <SectionContainer>
          <SectionTitle>환불 계좌 입력</SectionTitle>
          <BtnWrapper>
            <Select
              onChange={(e) => setSelectedBank(e.target.value)}
              value={selectedBank}
            >
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </Select>
            <AccountInput
              type="text"
              placeholder="000-0000-000000"
              value={refundAccount}
              onChange={(e) => setRefundAccount(e.target.value)}
            />
          </BtnWrapper>
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <SectionTitle>개인정보 처리</SectionTitle>
          <ToggleSection />
        </SectionContainer>
      </Container>
      <BottomButtonBar>
        <BackButton onClick={handleBack}>이전</BackButton>
        <NextButton onClick={handleSubmit}>결제하기</NextButton>
      </BottomButtonBar>
    </>
  );
};

export default ReservationForm;

const Container = styled.div`
  background: white;
  text-align: start;
  width: 100%;
  padding-bottom: 70px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 15px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 93%;
  height: 48px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 14px;
  resize: none;
  font-size: 12px;
  color: #333;
  border: none;
`;

const Input = styled.input`
  flex: 1;
  height: 48px;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 16px;
  color: #333;
  border: none;
`;

const Select = styled.select`
  flex: 1;
  height: 48px;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 16px;
  color: #333;
  border: none;
`;

const SubText = styled.div`
  font-size: 18px;
  color: #333;
  display: flex;
  gap: 1rem;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;
  div {
    font-size: 1.5rem;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;
  div {
    font-size: 1.5rem;
  }
`;

const Required = styled.span`
  color: red;
`;

const Optional = styled.div`
  color: #888;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  div {
    font-size: 1.3rem;
  }
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const AccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 93%;
  height: 48px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 2px 14px;
  align-items: center;
  resize: none;
  font-size: 16px;
  color: #333;
  border: none;
  div {
    color: #666;
    border-bottom: 1px solid #666;
  }
`;

const BackButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  background-color: #464646;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 1rem;
`;

const NextButton = styled.button`
  flex: 3;
  padding: 12px;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
`;

const PaymentButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PaymentButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#ff6b6b" : "#ccc")};
  color: white;
  cursor: pointer;
`;

const AccountInput = styled.input`
  flex: 2;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f7f7f7;
  color: #999;
`;

const Notice = styled.div`
  font-size: 1.5rem;
  color: #333;
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 1rem;
  box-sizing: border-box;
`;