import React from "react";
import styled from "styled-components";
import OrderBar from "./OrderBar.js";

function ExpandedItem(props) {
  function handleCloseClick() {
    props.handleCloseSelected();
  }
  return (
    <>
      <ExpandedViewContainer visible={props.visible}>
        <ExpandedItemContainer>
          <HeaderContainer>
            <TitleContainer>{props.info.title}</TitleContainer>
            <CloseButton onClick={handleCloseClick}>x</CloseButton>
          </HeaderContainer>
          <ContentContainer>
            <DescriptionContainer>
              {props.info.description}
            </DescriptionContainer>
            <ImageContainer>
              <img
                src={props.info.image}
                style={{ borderRadius: `5px`, width: `50%` }}
                alt=""
              />
            </ImageContainer>
          </ContentContainer>
          <OrderBar />
        </ExpandedItemContainer>
      </ExpandedViewContainer>
    </>
  );
}
export default ExpandedItem;

const CloseButton = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 400;
  background-color: #d1cfc9;
  height: 40px;
  width: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const ImageContainer = styled.div`
  height: fit-content;
  display: grid;
  place-items: center;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  padding: 3px;
  height: fit-content;
  // width: 100%;
`;

const TitleContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 33px;
  height: fit-content;
`;

const ExpandedItemContainer = styled.div`
  height: 90vh;
  width: 45%;
  padding: 1.5%;
  background-color: #f7f5f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border-radius: 1%;
`;
const ExpandedViewContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? "flex" : "none")};
`;
