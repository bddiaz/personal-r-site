import React from "react";
import styled from "styled-components";
import Pupusa from "./assets/pupusaItem2.webp";

function MenuItem(props) {
  return (
    <>
      <ItemContainer>
        <ImageContainer></ImageContainer>
        <ItemDescription>This pupusa is so delicious.</ItemDescription>
      </ItemContainer>
    </>
  );
}
export default MenuItem;

const ItemDescription = styled.div`
  width: 100%;
  height: fit-content:
`;

const ImageContainer = styled.div`
  height: 70%;
  width: 100%;
  background-color: blue;
  background-image: url(${Pupusa});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const ItemContainer = styled.div`
  background-color: #bf4c0e;
  height: 40vh;
  width: 40vh;
  border-radius: 8px;
  padding: 3%;
`;
