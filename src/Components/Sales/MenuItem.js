import React from "react";
import styled from "styled-components";
import Pupusa from "./assets/pupusaItem2.webp";

function MenuItem(props) {
  return (
    <>
      <ItemContainer>
        <ItemDescription>This pupusa is so delicious.</ItemDescription>
        <ImageContainer></ImageContainer>
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
  height: 150px;
  width: 150px;
  background-color: blue;
  background-image: url(${Pupusa});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const ItemContainer = styled.div`
  background-color: blue;
  display: flex;
  height: 15vh;
  width: 50vh;
  border-radius: 8px;
  padding: 3%;
`;
