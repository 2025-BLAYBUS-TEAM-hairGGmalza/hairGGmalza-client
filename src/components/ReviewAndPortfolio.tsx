import styled from "styled-components"
import { IoMdStar } from "react-icons/io";

const ReviewAndPortfolio = () => {

   return (
      <Wrapper>
         <Title>리뷰</Title>
         <ContentsContainer>
            <ReviewCard>
               {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
               <ReviewBottom>
                  <ReviewStars>
                     <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                     <Score>5.0</Score>
                  </ReviewStars>
                  <ReviewText>
                     예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                  </ReviewText>
               </ReviewBottom>
            </ReviewCard>
            <ReviewCard>
               {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
               <ReviewBottom>
                  <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                  <ReviewText>
                     예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                  </ReviewText>
               </ReviewBottom>
            </ReviewCard>
            <ReviewCard>
               {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
               <ReviewBottom>
                  <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                  <ReviewText>
                     예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                  </ReviewText>
               </ReviewBottom>
            </ReviewCard>
         </ContentsContainer>

         <Title>포트폴리오</Title>
         <PortfolioImage />
      </Wrapper>
   )
}

export default ReviewAndPortfolio

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
`

const Title = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 20px;
   font-size: 16px;
   margin-bottom: 15px;
`

////////////////////// Review //////////////////////
const ContentsContainer = styled.div`
   transition: opacity 0.5s ease-in-out; //애니메이션
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 15px;
   margin-bottom: 20px;
   overflow-x: auto;
   white-space: nowrap;
   padding-bottom: 5px;
   /* scroll-snap-type: x mandatory;
   -webkit-overflow-scrolling: touch; */
`;


const ReviewCard = styled.div`
   width: 190px;
   height: 190px;
   flex-shrink: 0; /* ✅ 카드가 찌그러지지 않도록 설정 */
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   border-radius: 8px;
   background-image: url('/images/review-example.jpeg');
   background-size: cover;
   background-position: center;
   background-color: #f0f0f0;

   scroll-snap-align: start; /* 스크롤 시 카드가 정렬됨 */
`;

const ReviewBottom = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   background-color: black;
   padding: 10px;
   box-sizing: border-box;
   border-bottom-left-radius: 8px;
   border-bottom-right-radius: 8px;
`;

const ReviewText = styled.div`
   width: 100%;
   font-size: 12px;
   margin-top: 5px;
   color: white;
   line-height: 1.4;
   white-space: normal;

   display: -webkit-box;
   -webkit-line-clamp: 2; /* 두 줄까지만 표시 */
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`;


const ReviewStars = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`

const Score = styled.div`
   font-size: 16px;
   color: white;
   margin-left: 5px;
`

const PortfolioImage = styled.div`
   width: 100%;
   height: 500px;
   background-image: url('/images/portfolio-example.jpeg');
   background-size: cover;
   background-position: center;
   background-color: #f0f0f0;
   margin-bottom: 20px;
`