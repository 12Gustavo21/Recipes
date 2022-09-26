import styled from "styled-components"

export const Main = styled.main`
   font-family: 'Caros Soft';
`

export const Title = styled.div`
   background-color: #F2F4F1; 
   padding-top: 10%;
   padding-bottom: 5%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const CardFoods = styled.div`
   background-color: #F2F4F1;
   display: flex;
   justify-content: space-evenly;    
   padding-bottom: 30vh;

   @media(max-width: 1157px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Food = styled.div`
   width: 27%;
   height: 75vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: hidden;
   object-fit: cover;
   box-shadow: 0px 5px 15px -10px;
   transition: 1s all;

   &:hover{
      transform: scale(1.1);
   }

   @media(max-width: 1157px) {
        margin-bottom: 10vh;
        width: 300px;
    }
`

export const Images = styled.img`
   width: 100%;
   height: 38vh;
   object-fit: cover;
`

export const ContentsFood = styled.div`
   width: 100%;
   height: 15vh;
   margin-top: 15%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   justify-content: space-between;
`

export const AboutConteiner = styled.div`
   display: flex;

   @media(max-width: 1242px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SpoonImg = styled.img`
   width: 50%;

   @media(max-width: 1242px){
      margin-bottom: 5vh;
   }

   @media(max-width: 1179px){
      width: 500px;
   }

   @media(max-width: 671px){
      width: 400px;
   }

   @media(max-width: 431px){
      width: 280px;
   }
`

export const ContentsAbout = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   p{
      width: 70%;
      margin-top: 5%;
      font-weight: 200;
   }
`