import styled from "styled-components";
import WishCard from "./WishCard";
import { useEffect, useState } from "react";
import { getMarked } from "@/apis/wishList";
import { WishProps } from "@/types/request";

const MyWishList = () => {
  const [data, setData] = useState<WishProps[]>();

  useEffect(() => {
    const getWish = async () => {
      const response = await getMarked();
      console.log(response);
      setData(response);
    };
    getWish();
  }, []);

  return (
    <Grid>
      {data &&
        data.map((item) => (
          <WishCard
            key={item.designerId}
            imageUrl={item.profile}
            title={item.name}
            location={item.address}
            meetingType={item.meetingType}
            major={item.majors}
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
