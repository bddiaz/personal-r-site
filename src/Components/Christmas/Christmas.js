import styled from "styled-components";
import React, { useState, useEffect } from "react";
import GiftForm from "./GiftForm.js";

export default function Christmas() {
  const [giftList, setGiftList] = useState([]);

  function addGiftList(newGiftIdea) {
    let name = newGiftIdea.name;
    let relation = newGiftIdea.relation;
    let ideas = newGiftIdea.ideas;
    let temp = {
      name: name,
      relation: relation,
      ideas: ideas,
    };
    let copy = giftList;
    copy.push(temp);
    setGiftList(copy);
    console.log(copy);
  }

  return (
    <BodySpace>
      <TitleContainer>
        <StyledHeader> Create your Christmas gift list here!</StyledHeader>
        <StyledDesc>
          Add your family members and friends, and create a list of what you'll
          give them for the Holidays!
        </StyledDesc>
      </TitleContainer>
      <Content>
        <FormSpace>
          <GiftForm handleSubmit={addGiftList} />
        </FormSpace>
        <CardsSpace></CardsSpace>
      </Content>
    </BodySpace>
  );
}

const FormSpace = styled.div`
  width: 30%;
  height: 100%;
`;

const CardsSpace = styled.div`
  width: 60%;
  background-color: purple;
  height: 100%;
  margin-left: 5%;
`;

const Content = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

const BodySpace = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  background-color: #efefd0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  color: #1a659e;
  font-family: Papyrus;
`;

const StyledDesc = styled.p`
  color: black;
  font-family: Papyrus;
`;
