import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import ConsultingFilter from "./ConsultingFilter";
import RegionFilter from "./RegionFilter";
import PriceFilter from "./PriceFilter";
import HairInfoFilter from "./HairInfoFilter";
import ExpertiseFilter from "./ExpertiseFilter";
import TabBar from "./TabBar";
import styled from "styled-components";
import BottomModal from "../common/BottomModal";

interface FilterModalProps {
  isBottomOpen: boolean;
  setIsBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type SectionRefs = Record<string, RefObject<HTMLDivElement | null>>;

const FilterModal: React.FC<FilterModalProps> = ({
  isBottomOpen,
  setIsBottomOpen,
}) => {
  const [activeTab, setActiveTab] = useState<string>("consulting");

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

  // ✅ 탭 클릭 시 해당 섹션으로 스크롤 이동
  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    const targetRef = sectionRefs[id];

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ 스크롤 이벤트 감지 및 activeTab 업데이트
  const updateActiveTab = useCallback(() => {
    if (!filterWrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const section =
              entry.target.getAttribute("data-section") || "consulting";
            console.log("✅ 활성화된 섹션:", section); // 디버깅 로그
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
      {/* ✅ TabBar 추가 */}
      <TabBar activeTab={activeTab} onSelectTab={handleTabSelect} />

      {/* ✅ 내부 스크롤 감지 가능하도록 ref 추가 */}
      <FilterWrapper ref={filterWrapperRef}>
        <Section ref={consultingRef} data-section="consulting">
          <ConsultingFilter />
        </Section>
        <Section ref={regionRef} data-section="region">
          <RegionFilter />
        </Section>
        <Section ref={priceRef} data-section="price">
          <PriceFilter />
        </Section>
        <Section ref={expertiseRef} data-section="expertise">
          <ExpertiseFilter />
        </Section>
        <Section ref={hairRef} data-section="hair">
          <HairInfoFilter />
        </Section>
      </FilterWrapper>
    </BottomModal>
  );
};

export default FilterModal;

const FilterWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 70vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  /* padding: 16px 0; */
`;
