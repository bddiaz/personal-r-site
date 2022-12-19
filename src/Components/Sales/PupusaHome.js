import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";
import Banner from "./assets/pupusas1.jpg";
import Menu from "./PupusaMenu.js";

function PupusaHome(props) {
  return (
    <>
      <PupusaHeader />
      <HeroContainer>
        <HeroText>Pupusas de las hermanas Marias</HeroText>
        <HeroSubText> Hechas en casa </HeroSubText>
      </HeroContainer>
      <BodyContainer>
        <Menu></Menu>
      </BodyContainer>
    </>
  );
}
export default PupusaHome;

const HeroSubText = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  color: #f7f5f4;
`;

const HeroText = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  color: #f7f5f4;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    background-size: 102%;
    transition: background-size 1s;
  }
`;

const BodyContainer = styled.div`
  background-color: #f7f2dd;
  height: 90vh;
  width: 100%;
  padding: 1%;
`;
