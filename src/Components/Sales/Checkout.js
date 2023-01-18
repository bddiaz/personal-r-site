import React from "react";
import CartItem from "./CartItem.js";
import styled from "styled-components";

function Checkout(props) {
  function handleRemove(index) {
    props.handleRemove(index);
  }
  return (
    <>
      {props.currentOrder
        .filter((item) => item.quantity > 0)
        .map((item, i) => (
          <>
            <CartItem
              itemInfo={item}
              handleRemove={handleRemove}
              key={item.index}
              addQuantity={props.addQuantity}
              delQuantity={props.delQuantity}
            />
          </>
        ))}
      <TotalContainer>Your total is: ${props.total * 3}</TotalContainer>
    </>
  );
}
export default Checkout;

const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  // background-color: red;
  justify-content: center;
  align-items: center;
`;
