"use client";

import styled from 'styled-components'

const DesignerPage = ({ params }: { params: { id: string } }) => {
   return (
      // <div>DesignerPage of {params.id}</div>

      <DesignerPageWrapper>
         <DesignerPageHeader>디자이너 정보</DesignerPageHeader>
         <DesignerMainImage />
         <Content>
            <MainIntroContainer>
               <ProfileImage />
               <NameAndAddress>
                  <Name>박수빈 디자이너</Name>
                  <Address>
                     <span id='address_detail' style={{marginRight:'10px'}}>서울 강남구 압구정로79길</span>
                     <span id='address_category' style={{color: '#808080'}}>홍대/연남/합정</span>
                  </Address>
               </NameAndAddress>
               <HeartContainer id='heart_container'>
                  <HeartImage src='/images/heart.png'/>
                  <span>32</span>
               </HeartContainer>
            </MainIntroContainer>
            <OneLineIntro>
               트렌디한 감성, 섬세한 손길로 새로운 감성을
            </OneLineIntro>
         </Content>
      </DesignerPageWrapper>
   )
}

export default DesignerPage

const DesignerPageWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   /* height: 100vh; */
`

const DesignerPageHeader = styled.header`
   width: 100%;
   height: 55px;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   font-size: 20px;

   border-bottom: 1px solid #747474;
`

const DesignerMainImage = styled.div`
   width: 100%;
   height: 350px;
   background-color: #f0f0f0;
`

const Content = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 20px;

   border-left: 1px solid #747474;
   border-right: 1px solid #747474;

`

const MainIntroContainer = styled.div`
   width: 100%;
   height: 60px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

`

const ProfileImage = styled.div`
   height: 90%;
   aspect-ratio: 1/1;
   border-radius: 50%;
   background-color: #f0f0f0;
`

const NameAndAddress = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`

const Name = styled.div`
   font-size: 18px;
`

const Address = styled.div`
   font-size: 13px;
`

const HeartContainer = styled.div`
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`

const HeartImage = styled.img`
   width: 40px;
   height: 40px;
`

const OneLineIntro = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;
   font-size: 14px;
`