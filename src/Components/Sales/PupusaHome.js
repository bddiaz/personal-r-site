import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";

function PupusaHome(props) {
  return (
    <>
      <PupusaHeader />

      <BodyContainer></BodyContainer>
    </>
  );
}
export default PupusaHome;

const BodyContainer = styled.div`
  background-color: #f7f2dd;
  height: 90vh;
  width: 100%;
`;
