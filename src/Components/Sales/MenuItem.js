import React from "react";
import styled from "styled-components";
import Pupusa from "./assets/pupusaItem2.webp";

function MenuItem(props) {
  return (
    <>
      <ItemContainer>
        <DescriptionContainer>
          <ItemTitle>{props.title}</ItemTitle>
          <ItemDescription>{props.description}</ItemDescription>
        </DescriptionContainer>

        <ImageContainer image={props.image}></ImageContainer>
      </ItemContainer>
    </>
  );
}
export default MenuItem;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: blue;
  width: 70%;
`;
const ItemTitle = styled.div`
  font-family: "Josefin Sans", sans-serif;
  //  background-color: red;
  font-size: 30px;
`;

const ItemDescription = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 15px;
`;

const ImageContainer = styled.div`
  height: 150px;
  width: 150px;
  //background-color: blue;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const ItemContainer = styled.div`
  background-color: #ddd7c4;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 50vh;
  border-radius: 8px;
  padding: 3%;
`;
