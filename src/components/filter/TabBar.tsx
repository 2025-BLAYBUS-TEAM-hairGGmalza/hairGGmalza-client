import styled from "styled-components";

const tabs = [
  { id: "consulting", label: "컨설팅 유형" },
  { id: "region", label: "지역" },
  { id: "price", label: "가격대" },
  { id: "expertise", label: "전문분야" },
  { id: "hair", label: "헤어정보" },
];

const TabBar = ({
  activeTab,
  onSelectTab,
}: {
  activeTab: string;
  onSelectTab: (id: string) => void;
}) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          isActive={tab.id === activeTab}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default TabBar;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  /* border-bottom: 2px solid #ddd; */
`;

const TabItem = styled.div<{ isActive: boolean }>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#000" : "#aaa")};
  padding-bottom: 1rem;
  border-bottom: ${(props) => (props.isActive ? "solid 1px #000" : "#aaa")};
  cursor: pointer;
`;
