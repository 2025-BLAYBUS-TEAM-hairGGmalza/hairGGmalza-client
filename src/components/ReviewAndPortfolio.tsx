import styled from "styled-components"
import { IoMdStar } from "react-icons/io";

const ReviewAndPortfolio = () => {
   return (
      <Wrapper>
         <Title>
            <Selection>
               <span style={{borderRight:'1px solid black', paddingRight:'20px'}}>후기</span>
               <span style={{marginLeft:'20px'}}>포트폴리오</span>
            </Selection>
            <span>더보기</span>
         </Title>
         <Contents>
            <ReviewsContainer>
               <ReviewCard>
                  {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
                  <ReviewBottom>
                     <ReviewStars>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>   
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                     </ReviewStars>
                     <ReviewText>
                        예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                     </ReviewText>
                  </ReviewBottom>
               </ReviewCard>
               <ReviewCard>
                  {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
                  <ReviewBottom>
                     <ReviewStars>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>   
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                     </ReviewStars>
                     <ReviewText>
                        예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                     </ReviewText>
                  </ReviewBottom>
               </ReviewCard>
               <ReviewCard>
                  {/* <ReviewImg src="/images/review-example.jpeg" alt="review-example"/> */}
                  <ReviewBottom>
                     <ReviewStars>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>   
                        <IoMdStar style={{color:'white',fontSize:'22px'}}/>
                     </ReviewStars>
                     <ReviewText>
                        예쁘게 잘라주셔서 감사합니다! 완전 맘에 들어요 친구들이 머리 어디서 했냐고 맨날 물어봐요 ㅋ
                     </ReviewText>
                  </ReviewBottom>
               </ReviewCard>
            </ReviewsContainer>
            <PortfolioContainer>
            
            </PortfolioContainer>
         </Contents>
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
   margin-top: 30px;

   border: 1px solid #ff8a8a;
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

const Selection = styled.div`
   display: flex;
   
`

const Contents = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

////////////////////// Review //////////////////////
const ReviewsContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 15px;
   margin-bottom: 20px;

   // 스크롤 가능하도록 설정
   overflow-x: auto;
   overflow-y: hidden;
   white-space: nowrap;
   box-sizing: border-box;
   padding-bottom: 5px;

   scroll-snap-type: x mandatory; /* 부드럽게 스크롤 */
   -webkit-overflow-scrolling: touch; /* 모바일에서 스크롤 부드럽게 */
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

//////portfolio//////
const PortfolioContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const PortfolioCard = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`
