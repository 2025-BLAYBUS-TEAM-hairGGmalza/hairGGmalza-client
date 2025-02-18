import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import ConsultingFilter from "./ConsultingFilter";
import RegionFilter from "./RegionFilter";
import PriceFilter from "./PriceFilter";
import HairInfoFilter from "./HairInfoFilter";
import ExpertiseFilter from "./ExpertiseFilter";
import TabBar from "./TabBar";
import styled from "styled-components";
import BottomModal from "../common/BottomModal";
import BottomButtonBar from "../common/BottomButtonBar";

interface FilterModalProps {
  isBottomOpen: boolean;
  setIsBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onApplyFilters: (filters: string[]) => void;
}

interface HairInfo {
  concerns: string[];
  length: string | null;
  condition: string | null;
}

type SectionRefs = Record<string, RefObject<HTMLDivElement | null>>;

const FilterModal: React.FC<FilterModalProps> = ({
  isBottomOpen,
  setIsBottomOpen,
  onApplyFilters,
}) => {
  const [activeTab, setActiveTab] = useState<string>("consulting");

  const [consultingType, setConsultingType] = useState<string | null>(null);
  const [region, setRegion] = useState<string[] | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [expertise, setExpertise] = useState<string[] | null>(null);
  const [hairInfo, setHairInfo] = useState<HairInfo | null>({
    concerns: [],
    length: null,
    condition: null,
  });

  const handlePriceChange = (min: number | null, max: number | null) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  // ✅ 각 필터의 ref 생성
  const consultingRef = useRef<HTMLDivElement | null>(null);
  const regionRef = useRef<HTMLDivElement | null>(null);
  const priceRef = useRef<HTMLDivElement | null>(null);
  const expertiseRef = useRef<HTMLDivElement | null>(null);
  const hairRef = useRef<HTMLDivElement | null>(null);
  const filterWrapperRef = useRef<HTMLDivElement | null>(null); // ✅ 모달 내부 스크롤 감지용 ref

  const sectionRefs: SectionRefs = {
    consulting: consultingRef,
    region: regionRef,
    price: priceRef,
    expertise: expertiseRef,
    hair: hairRef,
  };

  const handleResetFilters = () => {
    setConsultingType(null);
    setRegion(null);
    setMinPrice(null);
    setMaxPrice(null);
    setExpertise(null);
    setHairInfo({
      concerns: [],
      length: null,
      condition: null,
    });
  };

  const handleApplyFilters = async () => {
    const filterData = {
      consultingType,
      region,
      minPrice,
      maxPrice,
    };

    console.log("📡 필터 데이터:", filterData);

    // try {
    //   const response = await fetch("/api/filter", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(filterData),
    //   });

    //   if (!response.ok) throw new Error("API 요청 실패");

    //   console.log("✅ 필터 적용 성공!");
    // } catch (error) {
    //   console.error("❌ 필터 적용 실패:", error);
    // }

    const filters: string[] = [];

    if (consultingType) filters.push(consultingType);
    if (region && region.length > 0) filters.push(...region);
    if (minPrice !== null || maxPrice !== null) {
      filters.push(`₩${minPrice || 0} - ₩${maxPrice || "무제한"}`);
    }
    if (expertise && expertise.length > 0) filters.push(...expertise);
    if (hairInfo) {
      if (hairInfo.length) filters.push(`길이: ${hairInfo.length}`);
      if (hairInfo.condition) filters.push(`상태: ${hairInfo.condition}`);
      if (hairInfo.concerns.length > 0) filters.push(...hairInfo.concerns);
    }

    onApplyFilters(filters);
  };

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    const targetRef = sectionRefs[id];

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const updateActiveTab = useCallback(() => {
    if (!filterWrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const section =
              entry.target.getAttribute("data-section") || "consulting";
            setActiveTab(section);
            break;
          }
        }
      },
      {
        root: filterWrapperRef.current, // ✅ 모달 내부 스크롤 감지하도록 설정
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.2,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  // ✅ 모달이 열릴 때 스크롤 감지 시작
  useEffect(() => {
    if (isBottomOpen) {
      const cleanup = updateActiveTab();
      return cleanup;
    }
  }, [isBottomOpen, updateActiveTab]);

  return (
    <BottomModal
      isOpen={isBottomOpen}
      onClose={() => setIsBottomOpen(false)}
      title="필터"
    >
      <TabBar activeTab={activeTab} onSelectTab={handleTabSelect} />

      <FilterWrapper ref={filterWrapperRef}>
        <Section ref={consultingRef} data-section="consulting">
          <ConsultingFilter
            selected={consultingType}
            onChange={setConsultingType}
          />
        </Section>
        <Section ref={regionRef} data-section="region">
          <RegionFilter selected={region} onChange={setRegion} />
        </Section>
        <Section ref={priceRef} data-section="price">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onChangePrice={handlePriceChange}
          />
        </Section>
        <Section ref={expertiseRef} data-section="expertise">
          <ExpertiseFilter selected={expertise} onChange={setExpertise} />
        </Section>
        <Section ref={hairRef} data-section="hair">
          <HairInfoFilter selected={hairInfo} onChange={setHairInfo} />
        </Section>
      </FilterWrapper>
      <BottomButtonBar>
        <ResetButton onClick={handleResetFilters}>초기화</ResetButton>
        <ApplyButton onClick={handleApplyFilters}>적용하기</ApplyButton>
      </BottomButtonBar>
    </BottomModal>
  );
};

export default FilterModal;

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 70vh;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 2.5rem;
`;

const Section = styled.div`
  /* padding: 16px 0; */
`;

const ResetButton = styled.button`
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

const ApplyButton = styled.button`
  flex: 2;
  padding: 12px;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
`;
