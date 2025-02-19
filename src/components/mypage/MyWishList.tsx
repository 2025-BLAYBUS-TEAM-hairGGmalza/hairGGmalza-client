import styled from "styled-components";
import WishCard from "./WishCard";

const wishListData = [
  {
    id: 1,
    imageUrl: "/images/hairmodel.png",
    title: "헤어 디자이너",
    location: "강남/청담/압구정",
    description: "트렌디한 감성, 섬세한 손길로 새로운 모습을",
  },
  {
    id: 2,
    imageUrl: "/images/hairmodel.png",
    title: "메이크업 아티스트",
    location: "홍대/합정",
    description: "고객 맞춤 메이크업, 완벽한 변신!",
  },
  {
    id: 3,
    imageUrl: "/images/hairmodel.png",
    title: "네일 아티스트",
    location: "강남/역삼",
    description: "트렌디한 네일 디자인과 케어",
  },
  {
    id: 4,
    imageUrl: "/images/hairmodel.png",
    title: "뷰티 컨설턴트",
    location: "명동/을지로",
    description: "맞춤형 뷰티 솔루션 제공",
  },
];

const MyWishList = () => {
  return (
    <Grid>
      {wishListData.map((item) => (
        <WishCard
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          location={item.location}
          description={item.description}
        />
      ))}
    </Grid>
  );
};

export default MyWishList;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 9px;
  gap: 1rem;
`;
