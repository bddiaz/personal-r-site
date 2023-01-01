import React from "react";
import styled from "styled-components";

function CartItem(props) {
  return (
    <CartItemContainer>
      <div>{props.itemInfo.item}</div>
      {props.itemInfo.quantity > 0 ? (
        <div>{props.itemInfo.quantity}</div>
      ) : (
        <></>
      )}
    </CartItemContainer>
  );
}
export default CartItem;

const CartItemContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
