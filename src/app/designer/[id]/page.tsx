"use client";

import BottomButtonBar from "@/components/common/BottomButtonBar";
import BottomModal from "@/components/common/BottomModal";
import Header from "@/components/common/Header/Header";
import ReviewAndPortfolio from "@/components/ReviewAndPortfolio";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

import "./Calendar.css";
import Calendar from "react-calendar";
import { Value } from "react-calendar/src/shared/types.js";
import CenterModal from "@/components/common/CenterModal";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Tag from "@/components/common/Tag";
import { getDesigner } from "@/apis/designerAPI";
import { useRouter } from "next/navigation";
import ProgressCarousel from "@/components/common/carousel/ProgressCarousel";

const DesignerPage = () => {
  const id = String(useParams().id);
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  // 디자이너 정보 상태
  const [upPortfolios, setUpPortfolios] = useState<
    { src: string; alt: string }[]
  >([]);
  const [designerImage, setDesignerImage] = useState<string | null>(null);
  const [designerName, setDesignerName] = useState<string | null>(null);
  const [designerAdress, setDesignerAdress] = useState<string | null>(null);
  const [designerRegion, setDesignerRegion] = useState<string | null>(null);
  const [designerDescription, setDesignerDescription] = useState<string | null>(
    null
  );
  const [designerMajors, setDesignerMajors] = useState<string[] | null>(null);
  const [designerMeetingType, setDesignerMeetingType] = useState<
    string | undefined
  >("");
  const [designerOfflinePrice, setDesignerOfflinePrice] = useState<
    number | undefined
  >();
  const [designerOnlinePrice, setDesignerOnlinePrice] = useState<
    number | undefined
  >();

  const [isReservationModalOpen, setIsReservationBottomModalOpen] =
    useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedConsultingType, setSelectedConsultingType] = useState<
    "대면" | "화상" | null
  >(null);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const handleConsultingTypeChange = (type: "대면" | "화상") => {
    setSelectedConsultingType(type);
    setIsCenterModalOpen(true); //  버튼을 누를 때 모달 열기
    setSelectedPrice(
      type === "대면" ? designerOfflinePrice : designerOnlinePrice
    );
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleReservationButtonClick = () => {
    //토큰이 없으면 로그인 하단 모달 뜨기
    if (!localStorage.getItem("token")) {
      setIsLoginModalOpen(true);
      return;
    }

    if (!isReservationModalOpen) {
      setIsReservationBottomModalOpen(true);
      return;
    }

    // 예외 처리: 선택하지 않은 항목이 있으면 alert 표시
    if (!selectedConsultingType) {
      alert("상담유형을 선택해주세요.");
      return;
    }

    if (!selectedDate) {
      alert("일정을 선택해주세요.");
      return;
    }

    if (!selectedTime) {
      alert("시간을 선택해주세요.");
      return;
    }

    /// 날짜를 YYYYMMDD 형식으로 변환
    const formattedDate = selectedDate
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "");
    // 대면이면 offlinePrice, 화상이면 onlinePrice

    console.log("상담유형:", selectedConsultingType);
    console.log("선택한 날짜:", formattedDate);
    console.log("선택한 시간:", selectedTime);

    // 쿼리스트링 생성 후 이동
    const url = `/designer/${id}/payment?date=${formattedDate}&time=${selectedTime}&type=${selectedConsultingType}&price=${selectedPrice}`;
    console.log(url);
    router.push(url);
  };

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev); //  클릭할 때마다 상태 변경
  };

  const handleDateChange = (date: Value) => {
    if (!date || Array.isArray(date)) return; // 다중 선택 방어

    setSelectedDate(date);
    console.log(date.toLocaleDateString("ko-KR"));
  };

  useEffect(() => {
    setIsMounted(true);

    const fetchDesigner = async () => {
      try {
        const data = await getDesigner(id); // ✅ API 호출
        const designerData = data.data;

        console.log("API 응답 데이터:", designerData);

        // 상태 업데이트
        //portfolio1, portolio2로 오는 걸 upPortfolios 하나의 문자열 배열에 합치기
        // portfolio1, portfolio2를 객체 배열로 변환
        const formattedPortfolios = [
          { src: "/images/hairmodel.png", alt: "첫번째포폴" },
          { src: "/images/review-example.jpeg", alt: "두번째포폴" },
        ];
        setUpPortfolios(formattedPortfolios);
        setUpPortfolios(formattedPortfolios);
        setDesignerImage(designerData.profile);
        setDesignerName(designerData.name);
        setDesignerAdress(designerData.address);
        setDesignerRegion(designerData.region);
        setDesignerDescription(designerData.description);
        setDesignerMajors(designerData.majors);
        //meetingtype을 "OFFLINE"이면 "대면", "ONLINE"이면 "화상", "BOTH"이면 "대면/화상"으로 변경
        setDesignerMeetingType(
          designerData.meetingType === "OFFLINE"
            ? "대면"
            : designerData.meetingType === "ONLINE"
            ? "화상"
            : "대면/화상"
        );
        setDesignerOfflinePrice(designerData.offlinePrice);
        setDesignerOnlinePrice(designerData.onlinePrice);
      } catch (error) {
        console.error("디자이너 정보를 가져오는 중 오류 발생:", error);
      }
    };

    if (id) fetchDesigner(); // ✅ id가 있을 때만 실행

    // ❌ 여기서 상태를 로그 찍으면 이전 상태가 찍힘
  }, [id]); // ✅ 상태를 의존성 배열에서 제거

  useEffect(() => {
    console.log("업데이트된 디자이너 정보:", {
      designerName,
      designerAdress,
      designerRegion,
      designerDescription,
      designerMajors,
      designerMeetingType,
      designerOfflinePrice,
      designerOnlinePrice,

      upPortfolios,
    });
  }, [
    upPortfolios,
    designerName,
    designerAdress,
    designerRegion,
    designerDescription,
    designerMajors,
    designerMeetingType,
    designerOfflinePrice,
    designerOnlinePrice,
  ]);
  // ✅ 상태가 변경될 때만 로그를 찍음

  if (!isMounted) return null;

  return (
    <DesignerPageWrapper>
      {/* <DesignerPageHeader>디자이너 정보</DesignerPageHeader> */}
      <Header where="designer" />
      {/* <DesignerMainImage /> */}
      <ProgressCarousel images={upPortfolios} main={false} />
      <Content>
        <MainIntroContainer>
          <ProfileImage
            src={designerImage || "/default-image.jpg"}
            alt="디자이너 프로필 이미지"
          />
          <NameAndAddress>
            <Name>{designerName}</Name>
            <Address>
              <span id="address_detail" style={{ marginRight: "10px" }}>
                {designerAdress}
              </span>
              <span id="address_category" style={{ color: "#808080" }}>
                {designerRegion}
              </span>
            </Address>
          </NameAndAddress>
          <HeartContainer id="heart_container">
            {
              <HeartIcon onClick={handleHeartClick}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </HeartIcon>
            }
            <span style={{ fontSize: "10px" }}>32</span>
          </HeartContainer>
        </MainIntroContainer>
        <OneLineIntro>{designerDescription}</OneLineIntro>
        <TagsContainer>
          <div
            id="professional_tag"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <span>전문분야</span>
            {/* 할 수 있으면 tag 출력(api 잘 받아왔는지 검사) */}
            {Array.isArray(designerMajors)
              ? designerMajors.map((major, index) => (
                  <Tag key={index} type="major" text={major} />
                ))
              : null}
          </div>
          <div
            id="consulting_tag"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <span>컨설팅 유형</span>
            <Tag type="consulting" text={designerMeetingType} />
          </div>
        </TagsContainer>
        <PricesContainer>
          <PriceCard>
            <span id="price_title">대면</span>
            <span id="price" style={{ fontSize: "15px", fontWeight: "700" }}>
              {designerOfflinePrice}원
            </span>
          </PriceCard>
          <PriceCard>
            <span id="price_title">화상</span>
            <span id="price" style={{ fontSize: "15px", fontWeight: "700" }}>
              {designerOnlinePrice}원
            </span>
          </PriceCard>
        </PricesContainer>

        <ReviewAndPortfolio />
      </Content>

      {/* 하단 모달 - 예약하기 */}
      <BottomModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationBottomModalOpen(false)}
        title="예약하기"
      >
        {/* <TabContainer>
               <TabButton>상담유형</TabButton>
               <TabButton>일정</TabButton>
            </TabContainer> */}
        <ModalWrapper>
          <ChoiceContainer id="consulting_type">
            <ChoiceTitle>컨설팅 유형</ChoiceTitle>
            <ChoiceButtonContainer>
              <ChoiceButton
                onClick={() => handleConsultingTypeChange("대면")}
                selected={selectedConsultingType === "대면"}
              >
                <span id="price_title">대면</span>
                <span
                  id="price"
                  style={{ fontSize: "15px", fontWeight: "900" }}
                >
                  {designerOfflinePrice}원
                </span>
              </ChoiceButton>
              <ChoiceButton
                onClick={() => handleConsultingTypeChange("화상")}
                selected={selectedConsultingType === "화상"}
              >
                <span id="price_title">화상</span>
                <span
                  id="price"
                  style={{ fontSize: "15px", fontWeight: "900" }}
                >
                  {designerOnlinePrice}원
                </span>
              </ChoiceButton>
            </ChoiceButtonContainer>
          </ChoiceContainer>
          <ChoiceContainer id="date">
            <ChoiceTitle>일정</ChoiceTitle>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              formatDay={(locale, date) => date.getDate().toString()}
            />
          </ChoiceContainer>
          <ChoiceContainer id="time" style={{ paddingBottom: "70px" }}>
            {" "}
            {/* 고정 예약 버튼을 위한 여백 */}
            <ChoiceTitle>오전</ChoiceTitle>
            <TimeContainer>
              {["10:00", "10:30", "11:00", "11:30"].map((time) => (
                <TimeButton
                  key={time}
                  selected={selectedTime === time}
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </TimeButton>
              ))}
            </TimeContainer>
            <ChoiceTitle style={{ marginTop: "20px" }}>오후</ChoiceTitle>
            <TimeContainer>
              {[
                "12:00",
                "12:30",
                "1:00",
                "1:30",
                "2:00",
                "2:30",
                "3:00",
                "3:30",
                "4:00",
                "4:30",
                "5:00",
                "5:30",
                "6:00",
                "6:30",
                "7:00",
                "7:30",
                "8:00",
              ].map((time) => (
                <TimeButton
                  key={time}
                  selected={selectedTime === time}
                  onClick={() => handleTimeSelection(time)}
                >
                  {time}
                </TimeButton>
              ))}
            </TimeContainer>
          </ChoiceContainer>

          {/* 센터 모달 - 대면/화상 공통 */}
          <CenterModal
            isOpen={isCenterModalOpen}
            onClose={() => setIsCenterModalOpen(false)}
            title={
              selectedConsultingType === "대면"
                ? "대면 컨설팅을 선택했어요"
                : "화상 컨설팅을 선택했어요"
            }
            first={
              selectedConsultingType === "대면"
                ? "대면 컨설팅은 30,000원*부터 시작되며\n 실제 샵에 방문하여 진행됩니다."
                : "화상 컨설팅은 20,000원*부터 시작되며\n 예약 완료 후 생성되는 구글미트에서\n 화상으로 진행됩니다."
            }
            second={
              "컨설팅은 약 30분 소요되며\n종료 후 요약 리포트로 확인 가능해요."
            }
            third="*컨설팅 가격의 경우 디자이너마다 상이할 수 있습니다."
            login={false}
          />
        </ModalWrapper>
      </BottomModal>

      {/* 센터 모달 - 로그인하기 */}
      <CenterModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title={"\n\n로그인이 필요해요"}
        login={true}
      />

      {/* 하단 고정 예약 버튼 */}
      <BottomButtonBar>
        <ShareButton src="/images/shareButton.png" />
        <ReservationButton onClick={handleReservationButtonClick}>
          {/* {isModalOpen ? "예약 확인" : "예약하기"} */}
          예약하기
        </ReservationButton>
      </BottomButtonBar>
    </DesignerPageWrapper>
  );
};

export default DesignerPage;

const ModalWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChoiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ChoiceTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ChoiceButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  gap: 15px;
`;

const ChoiceButton = styled.div<{ selected: boolean }>`
  font-size: 14px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 17px;
  background-color: ${(props) => (props.selected ? "black" : "#f1f1f1")};
  color: ${(props) => (props.selected ? "#F3D7E5" : "black")};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start; /* 왼쪽 정렬 유지 */
`;

const TimeButton = styled.button<{ selected: boolean }>`
  flex: 1 1 calc(25% - 10px);
  max-width: calc(25% - 10px);
  aspect-ratio: 2/1;
  background-color: ${(props) => (props.selected ? "black" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "#F3D7E5" : "black")};
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    background: ${(props) => (props.selected ? "black" : "#e0e0e0")};
  }
`;

///////

const DesignerPageWrapper = styled.div`
  width: 100%;
  max-width: 470px; /* 모바일 화면 비율 고정 */
  margin: 0 auto; /*  중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  /* 하단 고정 예약 버튼을 위한 여백 */
  padding-bottom: 70px;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const MainIntroContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const NameAndAddress = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Address = styled.div`
  font-size: 14px;
`;

const HeartContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

const HeartIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;

const OneLineIntro = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
  font-size: 14px;
  gap: 11px;
`;

const PricesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;

const PriceCard = styled.div`
  font-size: 14px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 17px;
  background-color: #f1f1f1;
`;

const ShareButton = styled.img`
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  //남는 칸의 가운데에 배치
  margin-left: auto;
  margin-right: auto;
`;

const ReservationButton = styled.button`
  width: 300px;
  background: white;
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 14px 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }
`;
