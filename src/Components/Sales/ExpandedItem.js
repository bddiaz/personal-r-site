import React from "react";
import styled from "styled-components";

function ExpandedItem(props) {
  function handleClick() {
    props.handleClick();
  }
  return (
    <>
      <ExpandedViewContainer visible={props.visible}>
        <ExpandedItemContainer onClick={handleClick}></ExpandedItemContainer>
      </ExpandedViewContainer>
    </>
  );
}
export default ExpandedItem;

const ExpandedViewContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const ExpandedItemContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: blue;
`;
