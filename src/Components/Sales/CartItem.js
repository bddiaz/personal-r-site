import React from "react";
import styled from "styled-components";

function CartItem(props) {
  function handleRemove() {
    props.handleRemove(props.itemInfo.index);
    // console.log(index);
  }

  return (
    <CartItemContainer>
      <QuantContainer>{props.itemInfo.quantity}</QuantContainer>
      <ItemInfoContainer>
        {props.itemInfo.item}
        <RemoveItemButton onClick={handleRemove}>Remove</RemoveItemButton>
      </ItemInfoContainer>

      <PriceContainer>${props.itemInfo.quantity * 3}</PriceContainer>
    </CartItemContainer>
  );
}
export default CartItem;

const RemoveItemButton = styled.button`
  width: fit-content;
  background-color: white;
  color: black;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 15px;
`;

const QuantContainer = styled.div`
  width: 15%;
  // background-color: purple;
  display: flex;
  justify-content: center;
`;

const ItemInfoContainer = styled.div`
  width: 60%;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  // justify-content: center;
`;
const PriceContainer = styled.div`
  width: 20%;
  // background-color: yellow;
  display: flex;
  justify-content: center;
`;

const CartItemContainer = styled.div`
  padding-top: 3%;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: fit-content;
  width: 100%;
  // background-color: red;
`;
