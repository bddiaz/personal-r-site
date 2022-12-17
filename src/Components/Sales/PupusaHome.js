import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";

function PupusaHome(props) {
  return (
    <>
      <PupusaHeader />
      <HeroContainer />
      <BodyContainer></BodyContainer>
    </>
  );
}
export default PupusaHome;

const HeroContainer = styled.div`
  background-color: #ae0103;
  width: 100%;
  height: 40%;
`;

const BodyContainer = styled.div`
  background-color: #f7f2dd;
  height: 90vh;
  width: 100%;
`;
