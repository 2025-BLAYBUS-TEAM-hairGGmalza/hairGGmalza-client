"use client";

import React, { useEffect, useState } from "react";
import Explain from "../Explain";
import CategorySelector from "../CategorySelector";
import { FaMapMarkerAlt } from "react-icons/fa";
import CarouselWrapper from "../CarouselWrapper";
import DesignerCarousel from "@/components/common/carousel/DesignerCarousel";
import { Designer, MeetingRequest } from "@/types/request";
import { filterDesigner } from "@/apis/filter";

const categories = [
  "서울전체",
  "홍대/연남/합정",
  "강남/청담/압구정",
  "신촌/이대/혜화",
];

const Section5 = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);

  useEffect(() => {
    const fetchDesigners = async () => {
      const body: MeetingRequest = {
        meetingType: null,
        region: 0,
        minPrice: null,
        maxPrice: null,
        majors: null,
      };

      try {
        const response = await filterDesigner(body);
        console.log(response.data.designerInfos);
        setDesigners(response.data.designerInfos);
      } catch (error) {
        console.error("Failed to fetch designers:", error);
      }
    };

    fetchDesigners();
  }, []);

  if (designers) {
    const data = designers.map((designer) => ({
      src: designer.profile,
      alt: "디자이너 이미지",
      name: designer.name,
      id: designer.designerId,
    }));

    return (
      <>
        <Explain
          title={"나와 가까운 디자이너는?"}
          subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
        />
        <CategorySelector
          categories={categories}
          Icon={<FaMapMarkerAlt />}
          setDesigners={setDesigners}
        />
        <CarouselWrapper>
          <DesignerCarousel designers={data} />
        </CarouselWrapper>
      </>
    );
  }
};

export default Section5;
