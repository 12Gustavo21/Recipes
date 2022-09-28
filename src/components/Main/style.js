import styled from "styled-components"

export const Main = styled.main`
   font-family: 'Caros Soft';
   color: #373737;
`

export const Title = styled.div`
   background-color: #F2F4F1; 
   padding-top: 10%;
   padding: 5%;
   display: flex;
   flex-direction: column;
   align-items: center;
   letter-spacing: 3px;
`

export const CardFoods = styled.div`
   background-color: #F2F4F1;
   display: flex;
   justify-content: space-evenly;    
   padding-bottom: 10vh;
   @media(max-width: 950px) {
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

export const Recipe = styled.h1`
   font-weight: 300;
`;

export const AboutConteiner = styled.div`
   display: flex;
   @media(max-width: 700px) {
      flex-direction: column;
      align-items: center;
   }
`

export const SpoonImg = styled.img`
   width: 50%;
   @media(max-width: 700px){
      width: 100%;
      margin-bottom: 5vh;
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
      margin: 5%;
      font-weight: 300;
   }
`

export const H1 = styled.h1`
   font-weight: 450;
`;

export const Line = styled.h1`
   letter-spacing: -1px;
   font-weight: bold;
`;