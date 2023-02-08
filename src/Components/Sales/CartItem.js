import React from "react";
import styled from "styled-components";

function CartItem(props) {
  function handleRemove() {
    props.handleRemove(props.itemInfo.index);
    // console.log(index);
  }

  function addQuantity() {
    props.addQuantity(props.itemInfo.index);
  }

  function delQuantity() {
    props.delQuantity(props.itemInfo.index);
  }

  return (
    <CartItemContainer>
      <QuantContainer>
        {props.itemInfo.quantity}
        <AdjustButtonContainer>
          <AdjustQuantButton onClick={delQuantity}>-</AdjustQuantButton>
          <AdjustQuantButton onClick={addQuantity}>+</AdjustQuantButton>
        </AdjustButtonContainer>
      </QuantContainer>
      <ItemInfoContainer>
        {props.itemInfo.item}
        <RemoveItemButton onClick={handleRemove}>Remove</RemoveItemButton>
      </ItemInfoContainer>

      <PriceContainer>${props.itemInfo.quantity * 3}</PriceContainer>
    </CartItemContainer>
  );
}
export default CartItem;

const AdjustButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const AdjustQuantButton = styled.button`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  background-color: #d1cfc9;
  height: 20px;
  width: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const RemoveItemButton = styled.button`
  width: fit-content;
  background-color: white;
  color: black;
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 15px;
`;

const QuantContainer = styled.div`
  width: 20%;
  // background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItemInfoContainer = styled.div`
  width: 55%;
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
  /* padding-top: 3%; */
  font-size: 20px;
  display: flex;
  flex-direction: row;
  background-color: #f7f5f4;
  justify-content: space-evenly;
  height: fit-content;
  width: 90%;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.04); 
  padding: 1%;
  // background-color: red;
`;
