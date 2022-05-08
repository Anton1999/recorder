import React from "react";
import background from '../../assets/background.svg'
import styled, {keyframes} from "styled-components";
import {HeaderContainer, HeaderSubTitle, HeaderTitle} from "./header.styled";

interface HeaderProps{
    title: string
}

const zoomBack = keyframes`
  from {
    position: fixed;
    top: -100px;
    left: -2000px;
    height: 1000px;
    max-height: 1000px;
    width: 4000px;
    max-width: 4000px;
  }

  to {
    position: fixed;
    top: -50vh;
    left: -50vw;
    width: 7326px;
    height: 4386px;
    max-height: 120vh;
    max-width: 200vw;
  }
`;


const Background = styled.img`

  animation: ${zoomBack} 2s ease ;
  transition: 2s ease;
  z-index: 0;
  position: fixed;
  top: -50vh;
  left: -50vw;
  width: 7326px;
  height: 4386px;
  max-height: 120vh;
  max-width: 200vw;

  @media (min-width: 497px) {
    max-height: 100vh;
    position: absolute;
  }
  @media (min-width: 697px) {
    max-height: 80vh;
    max-width: 240vw;
    left: -70vw;
    position: absolute;
  }
`

export const HeaderContent = styled.div`
  z-index: 1;
  position: relative;
  text-align: center;
  margin-top: 6vh;
  padding: 0 5vw;
`



export const Header : React.FC<HeaderProps> = ({title}) => {
    return <HeaderContainer>
        <Background src={background}/>
        <HeaderContent>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderSubTitle>С вами поделилсь аудизописью, записанной с помощью приложения MemoryBox.</HeaderSubTitle>
        </HeaderContent>

    </HeaderContainer>
}
