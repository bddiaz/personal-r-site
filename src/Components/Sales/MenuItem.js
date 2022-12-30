import React from "react";
import styled from "styled-components";
import Pupusa from "./assets/pupusaItem2.webp";

function MenuItem(props) {
  function handleItemSelect() {
    props.handleItemSelect(props.itemInfo.index);
  }

  return (
    <>
      <ItemContainer onClick={handleItemSelect}>
        <DescriptionContainer>
          <ItemTitle>{props.itemInfo.title}</ItemTitle>
          <ItemDescription>{props.itemInfo.description}</ItemDescription>
        </DescriptionContainer>
        <ImageContainer>
          <img src={props.itemInfo.image} height="150px" width="150px" alt="" />
        </ImageContainer>
      </ItemContainer>
    </>
  );
}
export default MenuItem;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 70%;
`;
const ItemTitle = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
`;

const ItemDescription = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 15px;
`;

const ImageContainer = styled.div`
  background-color: blue;
  height: fit-content;
  //object-fit: cover;
  //background-position: center;
  //background-repeat: no-repeat;
  //background-size: 100%;
`;

const ItemContainer = styled.div`
  height: fit-content;
  // background-color: #f0e5dd;
  border: 1.5px solid black;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 3%;
  cursor: pointer;
`;
