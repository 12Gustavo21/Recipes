import styled from "styled-components";
import Background from '../../img/Background-header.png';

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Caros Soft';
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border: 20px solid #fff;
`;

export const Box = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    color: #373737;

    @media(max-width: 950px) {
        justify-content: flex-end;
        height: 10vh;
    }
`;

export const Box1 = styled.div`
    width: 60%;
    padding-left: 50px;
    display: flex;
    align-items: center;

    @media(max-width: 950px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 2.5em;
`;

export const Box2 = styled.div`
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    @media(max-width: 950px) {
        display: none;
    }
`;

export const H1 = styled.h1`
    font-size: 1.2em;
    font-weight: 300;
    transition: 1s all;

    a {
        text-decoration: none;
        color: #373737;    
    } 

    &:hover {
        font-weight: bold;
    }
`;

export const Button = styled.button`
    background: none;
    border: 3px solid #373737;
    padding: 15px 40px;
    font-family: 'Caros Soft';
    font-size: 1.2em;
    cursor: pointer;
    transition: 1s all;
    font-weight: 300;

    &:hover {
        background: #373737;
        color: #fff;
        padding: 10px 35px;
    }
`;

export const Menu = styled.div`
    width: 15%;
    cursor: pointer;
    display: none;
    position: fixed;
    z-index: 99999999999;

    @media(max-width: 950px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
`;

export const Line = styled.div`
    width: 50%;
    height: .9vh;
    background: #373737;
    margin-top: 5px;

    @media(max-width: 500px) {
        width: 75%;
        margin-right: 20px;
    }
`;

export const Main = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
        height: 70vh;
        margin-bottom: 12vh;
    }
`;

export const MainText = styled.h1`
    color: #373737;
    font-size: 5em;
    letter-spacing: 10px;
    font-weight: 550;

    @media(max-width: 500px) {
        font-size: 4em;
    }

    @media(max-width: 400px) {
        font-size: 3em;
    }
`;