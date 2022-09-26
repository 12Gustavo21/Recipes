import React from 'react'
import * as S from "./style"
import Cake from '../../img/Cake.png'
import Pizza from '../../img/Pizza.png'
import Peanut from '../../img/smoothie.png'
import Spoon from '../../img/About-image.png'

export default function index(){
    return(
      <S.Main>
        <S.Title>
          <h1>LATEST RECIPES</h1>
          <h1>___</h1>
        </S.Title>
        <S.CardFoods>
          <S.Food>
            <S.Images src={Cake} alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Red Velvet Cake</h1>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src={Pizza} alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Margherita Pizza</h1>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src={Peanut} alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Peanut Smoothie</h1>
            </S.ContentsFood>
          </S.Food>
        </S.CardFoods>
        <S.AboutConteiner>
          <S.SpoonImg src={Spoon}/>
          <S.ContentsAbout>
            <h1>About</h1>
            <h1>___</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
          </S.ContentsAbout>
        </S.AboutConteiner>
      </S.Main>  
    )
} 