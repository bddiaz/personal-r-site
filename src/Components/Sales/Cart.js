import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem.js";

function Cart(props) {
  function handleClose() {
    props.handleClose();
  }
  return (
    <>
      <ExpandedViewContainer
        onClick={handleClose}
        visible={props.visible}
      ></ExpandedViewContainer>
      <CartWindowContainer visible={props.visible}>
        <CartHeader visible={props.visible}>Your Cart</CartHeader>
        <OrderDisplay>
          {props.currentOrder.map((type) => (
            <>
              <CartItem itemInfo={type} />
            </>
          ))}
        </OrderDisplay>
        <TotalBar>Your total is: ${props.total * 3}</TotalBar>
      </CartWindowContainer>
    </>
  );
}

export default Cart;
const TotalBar = styled.div`
  font-size: 23px;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red
  box-shadow: 0px -4px 2px rgba(50, 50, 50, 0.15);
`;

const OrderDisplay = styled.div`
  width: 100%;
  height: 80%;
  padding: 2%;
  // background-color: blue;
`;

const CartHeader = styled.div`
  width: 100%;
  height: 7vh;
  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ab5911;
  font-size: 23px;
  box-shadow: 0px 4px 2px rgba(50, 50, 50, 0.15);
`;

const CartWindowContainer = styled.div`
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  width: 30vh;
  height: 100%;
  position: fixed;
  right: ${(props) => (props.visible ? "0" : "-30vh")};
  background-color: #f7f5f4;
  transition: right 1.5s;
  z-index: 999;
`;

const ExpandedViewContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${(props) =>
    props.visible ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0,0)"};
  justify-content: end;
  z-index: ${(props) => (props.visible ? "999" : "-1")};
  display: flex;
  transition: background-color 0.5s ease;
`;
