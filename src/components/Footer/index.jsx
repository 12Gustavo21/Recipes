import React from "react";
import * as S from "./style";
import Instagram from "../../img/Instagram Ellipse.png";
import Twitter from "../../img/Twitter ellipse.png";
import Facebook from "../../img/Facebook Ellipse.png";
import Pinterest from "../../img/Pinterest Ellipse.png";

export default function index() {
    return (
        <S.Footer id="subscribe">
        <S.Container>
            <S.Form>
            <S.Box1>
                <S.Title>SUBSCRIBE</S.Title>
                <S.Caption>Sign up for newsletter</S.Caption>
            </S.Box1>
            <S.Box2>
                <S.Input type="email" placeholder="Your Email" />
                <S.Button type="submit">SUBMIT</S.Button>
            </S.Box2>
            </S.Form>
        </S.Container>
        <S.Final>
            <S.FinalBox>
            <S.Box3>
                <S.IconsBox>
                    <a href="https://www.instagram.com/" target={"_blank"}>
                        <S.Icon src={Instagram} alt="Instagram icon" />
                    </a>
                    <a href="https://twitter.com/" target={"_blank"}>
                        <S.Icon src={Twitter} alt="Twitter icon" />
                    </a>
                    <a href="https://www.facebook.com/" target={"_blank"}>
                        <S.Icon src={Facebook} alt="Facebook icon" />
                    </a>
                    <a href="https://br.pinterest.com/" target={"_blank"}>
                        <S.Icon src={Pinterest} alt="Pinterest icon" />
                    </a>
                </S.IconsBox>
            </S.Box3>
            <S.Box4>
                <S.List>
                <S.Li>
                    <a href="#about">ABOUT</a>
                </S.Li>
                <S.Li>
                    <a href="#recipes">RECIPES</a>
                </S.Li>
                <S.Li>
                    <a href="#subscribe">SUBSCRIBE</a>
                </S.Li>
                </S.List>
            </S.Box4>
            </S.FinalBox>
        </S.Final>
        <S.Reference>
            <p>
            Layout produzido por Vai na Web para fins exclusivamente educacionais.
            Referência:
            <a
                href="https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/"
                target={"_blank"}
            >
                https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
            </a>
            </p>
        </S.Reference>
        </S.Footer>
    );
}
