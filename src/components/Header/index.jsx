import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Header>
      <S.Container>
        <S.Box>
          <S.Box1>
            <S.Title>RC</S.Title>
          </S.Box1>
          <S.Box2>
            <S.H1>
              <a href="#about">ABOUT</a>
            </S.H1>
            <S.H1>
              <a href="#recipes">RECIPES</a>
            </S.H1>
            <a href="#subscribe">
              <S.Button>SUBSCRIBE</S.Button>
            </a>
          </S.Box2>
          <S.Menu>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </S.Menu>
        </S.Box>
        <S.Main>
          <S.MainText>RECIPES</S.MainText>
        </S.Main>
      </S.Container>
    </S.Header>
  );
}
