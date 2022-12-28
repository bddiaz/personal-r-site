import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";
import PupusaFooter from "./PupusaFooter.js";
import Banner from "./assets/pupusas1.jpg";
import Menu from "./PupusaMenu.js";
import ExpandedItem from "./ExpandedItem.js";

function PupusaHome(props) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible((value) => !value);
  }

  return (
    <>
      <ExpandedItem visible={visible} handleClick={handleClick}></ExpandedItem>
      <PupusaHeader />

      <HeroContainer>
        <HeroText>Pupusas de las hermanas Marias</HeroText>
        <HeroSubText> Hechas en casa </HeroSubText>
      </HeroContainer>

      <BodyContainer>
        <Menu handleClick={handleClick}></Menu>
      </BodyContainer>
      <PupusaFooter />
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
  // &:hover {
  //   background-size: 102%;
  //   transition: background-size 1s;
  // }
`;

const BodyContainer = styled.div`
  background-color: #f7f5f4;
  height: 60vh;
  width: 100%;
  padding: 1%;
`;
