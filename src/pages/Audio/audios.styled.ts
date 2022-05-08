import React from "react";
import styled, {keyframes} from "styled-components";
import {Colors} from "../../constants/UIContstants";


const load = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const AudiosContainer = styled.div`
  width: 100%;
  padding: 0 5vw;
  animation: ${load} 1s ease ;
  transition: 1s ease;
  box-sizing: border-box;
  
`

interface AudioBoxAudioProps{
    disabled:boolean
}



export const AudioBox = styled.div<AudioBoxAudioProps>`
  border-radius: 30px;
  box-shadow: 0 0 10px ${Colors.blue};
  padding: 40px;
  box-sizing: border-box;
  margin-bottom: 5vh;
  transition: 2s ease;
  opacity:   ${props => props.disabled ? "0" : "1"};
`

export const AudioBoxPic = styled.img`
  margin-left: 10%;
  margin-right: auto;
  width: 80%;
`


export const AudioBoxAudio = styled.div` 
  margin-right: 10%;
  width: 80%;

`