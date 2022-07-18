import {useState, useEffect} from 'react';
import styled from "styled-components";
import selfie from './selfie.png'

function Home (){
  return(
    <IntroSpace>
      <IntroContainer>
        <IntroText>
          HELLO YOU HAVE FOUND YOUR WAY INTO THIS SITE.<br/>
          PLEASE DO NOT JUDGE ME TOO HARSHLY.<br/>
          <br/>
          ENJOY YOUR STAY!
        </IntroText>
      </IntroContainer>
      <ImageContainer>
        <IntroImage>
        </IntroImage>
      </ImageContainer>
    </IntroSpace>
  )
};

export default Home;


const IntroSpace = styled.div`
    height:45vh;
    width:100vw;
    display:flex;
`

const IntroContainer = styled.div`
    width: 50%;
    background-color:#004e89;
    border-radius: 5px 40% 5px;
    display:flex;
    align-items:center;
    flex-direction:row;
`

const IntroText = styled.p`
    font-size:20px;
    font-weight:bold;
    color:#efefd0;
`
const IntroImage = styled.div`
    background-image: url(${selfie});
    height:15vw;
    width:15vw;
    background-size:500px;
    border-radius: 50%
`

const ImageContainer = styled.div`
    width:50%;
    height:45vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
