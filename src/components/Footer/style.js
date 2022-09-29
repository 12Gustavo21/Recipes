import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 80vh;
    background: #DFE4DE;
    font-family: 'Caros Soft';
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 50vh;
    width: 100%;
`;

export const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 25vh;
`;

export const Title = styled.h1`
    font-weight: 500;
    letter-spacing: 5px;
`;

export const Caption = styled.h2`
    font-weight: 300;
    letter-spacing: 2px;
`;

export const Box2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 50vh;
    width: 100%;
`;

export const Input = styled.input`
    width: 40%;
    padding: 5vh 0 5vh 5vh;
    outline: none;
    border: none;
    font-size: 1em;

    &::placeholder {
        font-weight: 400;
        font-family: 'Caros Soft';
    }

    @media(max-width: 975px) {
        width: 60%;
    }

    @media(max-width: 500px) {
        width: 80%;
    }
`;

export const Button = styled.button`
    background: none;
    border: 5px solid #373737;
    padding: 15px 45px;
    font-family: 'Caros Soft';
    font-size: 1em;
    cursor: pointer;
    transition: 1s all;
    font-weight: 400;
    letter-spacing: 3px;

    &:hover {
        background: #373737;
        color: #fff;
        border-radius: 30px;
    }

    @media(max-width: 500px) {
        padding: 15px 30%;
    }
`; 

export const Final = styled.div`
    background: #F2F4F1;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FinalBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 880px) {
        flex-direction: column-reverse;
    }
`;

export const Box3 = styled.div`
    display: flex;
    width: 50%;

    @media(max-width: 880px) {
        justify-content: center;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;

export const IconsBox = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width:400px) {
        width: 80%;
    }
`;

export const Icon = styled.img`
    max-width: 90%;
    transition: 1s all;

    &:hover {
        transform: rotate(20deg);
        filter: drop-shadow(5px 10px 10px #000);
    }

    @media(max-width: 500px) {
        max-width: 100%;
    }
`;

export const Box4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 60%;
    margin-right: 5em;

    @media(max-width: 880px) {
        justify-content: center;
        margin: 0;
    }
`;

export const List = styled.ul`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 880px) {
        flex-direction: column;
    }
`;

export const Li = styled.li`
    font-size: 1.2em;
    letter-spacing: 2px;

    a {
        color: #373737;
        text-decoration: none;
        font-family: 'Caros Soft';
        transition: 1s all;

        &:hover {
            font-weight: bold;
        }
    }

    @media(max-width: 880px) {
        margin: 1em;
    }
`;

export const Reference = styled.div`
    background: #446061;
    width: 100%;
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    font-size: .9em;
    font-family: 'Roboto';
    color: #ffffff90;
    word-break: break-all;

    a {
        color: #ffffff90;
        text-decoration: none;
    }

    @media(max-width: 500px) {
        padding: 10px;
    }
`;