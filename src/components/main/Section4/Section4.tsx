import React, { useEffect, useState } from "react";
import Explain from "../Explain";
import DesignerCarousel from "@/components/common/carousel/DesignerCarousel";
import CarouselWrapper from "../CarouselWrapper";
import CategorySelector from "../CategorySelector";
import { Designer, MeetingRequest } from "@/types/request";
import { filterDesigner } from "@/apis/filter";

const categories = ["컷", "펌", "염색", "탈염색"];

const Section4 = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);

  useEffect(() => {
    const fetchDesigners = async () => {
      const body: MeetingRequest = {
        meetingType: null,
        region: null,
        minPrice: null,
        maxPrice: null,
        majors: ["컷"],
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
      alt: "이미지",
      name: designer.name,
      id: designer.designerId,
    }));
    return (
      <>
        <Explain
          title={"지금 나에게 필요한 것은?"}
          subtitle={"후기가 보장하는 완벽 맞춤 헤어 컨설팅"}
        />
        <CategorySelector
          categories={categories}
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path
                d="M2.90622 4.20042C3.21048 4.62246 3.65216 4.9071 4.16254 4.98562C4.49625 5.04451 4.82014 4.9758 5.12441 4.86784L6.18442 6.35972L3.44604 10.7667C2.98474 11.5028 3.21048 12.4941 3.95642 12.9456C4.12328 13.0535 4.33921 12.9947 4.44717 12.8278L7.15611 8.48957L10.1104 12.6609C10.2282 12.818 10.4441 12.8572 10.6012 12.7395C11.3177 12.2389 11.4845 11.2476 10.984 10.5311L7.99038 6.30083L8.96207 4.74024C9.27615 4.83839 9.60004 4.86784 9.93375 4.78932C10.4441 4.67154 10.8662 4.36728 11.1508 3.9256C11.4256 3.49374 11.5042 2.96373 11.3962 2.46317C11.249 1.98223 10.9447 1.56019 10.503 1.29518C10.1693 1.07925 9.78653 0.990918 9.42337 1.00073C8.79521 1.02036 8.18668 1.33444 7.82353 1.91353C7.54871 2.34539 7.47019 2.8754 7.57815 3.37596C7.65667 3.70967 7.83334 3.98449 8.04927 4.22005L7.05796 5.80026L5.97831 4.26913C6.17461 4.01394 6.34146 3.7293 6.40035 3.39559C6.47887 2.88521 6.37091 2.36502 6.06664 1.94297C5.67404 1.39333 5.0557 1.1087 4.42754 1.12833C4.06439 1.13814 3.69142 1.25592 3.36752 1.48167C2.94548 1.78593 2.66084 2.22761 2.58232 2.73799C2.5038 3.24837 2.61177 3.76856 2.91603 4.19061L2.90622 4.20042ZM8.70688 2.46317C8.97188 2.04112 9.53134 1.91353 9.94357 2.16872C10.1497 2.29631 10.2871 2.49261 10.346 2.72817C10.4049 2.96373 10.3656 3.19929 10.238 3.40541C10.1104 3.61152 9.91412 3.74893 9.67856 3.80782C9.61967 3.82745 9.56078 3.82745 9.50189 3.82745C9.32522 3.82745 9.14855 3.78819 9.00133 3.69986C8.79521 3.57226 8.6578 3.37596 8.59891 3.1404C8.54002 2.90484 8.57928 2.66928 8.70688 2.46317ZM6.85184 6.41861C7.03833 6.29101 7.29352 6.33027 7.44074 6.51676C7.56834 6.70324 7.52908 6.95843 7.34259 7.10566C7.15611 7.23325 6.90092 7.19399 6.75369 7.00751C6.6261 6.82102 6.66536 6.56583 6.85184 6.41861ZM3.60308 2.93429C3.64234 2.69873 3.76994 2.49261 3.96624 2.3552C4.36865 2.07057 4.9281 2.1589 5.22255 2.57113C5.35996 2.76743 5.41885 3.00299 5.37959 3.23855C5.34033 3.47411 5.21274 3.68023 5.01644 3.81764C4.82014 3.95505 4.58458 4.01394 4.34902 3.97468C4.11346 3.93542 3.90735 3.80782 3.76994 3.61152C3.63253 3.41522 3.57364 3.17966 3.6129 2.9441L3.60308 2.93429Z"
                fill="#F3D7E5"
              />
            </svg>
          }
          setDesigners={setDesigners}
        />
        <CarouselWrapper>
          <DesignerCarousel designers={data} />
        </CarouselWrapper>
      </>
    );
  }
};

export default Section4;
