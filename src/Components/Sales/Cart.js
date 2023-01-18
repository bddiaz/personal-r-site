import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem.js";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();

  function handleClose() {
    props.handleClose();
  }

  function handleRemove(index) {
    props.handleRemove(index);
  }

  function handleCheckoutClick() {
    navigate("/pupusas/Checkout");
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
          {props.total == 0 ? <div>Your Cart is Empty! </div> : <></>}
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
        </OrderDisplay>
        <TotalBar>
          Your total is: ${props.total * 3}
          <CheckoutButton
            active={props.active}
            disabled={!props.active}
            onClick={handleCheckoutClick}
          >
            {" "}
            Checkout{" "}
          </CheckoutButton>
        </TotalBar>
      </CartWindowContainer>
    </>
  );
}

export default Cart;

const CheckoutButton = styled.button`
  width: 80%;
  background-color: ${(props) => (props.active ? "#ae0103" : "#CACCE1")};
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif;
  display: inline-block;
  border-radius: 12px;
  color: #f7f2dd;
  border: none;
  padding: 2px;
`;
const TotalBar = styled.div`
  font-size: 23px;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red
  box-shadow: 0px -4px 2px rgba(50, 50, 50, 0.15);
  flex-direction: column;
`;

const OrderDisplay = styled.div`
  width: 100%;
  height: 80%;
  // padding: 2%;
  // font-family: "Josefin Sans", sans-serif;
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
  width: 20vw;
  height: 100%;
  position: fixed;
  right: ${(props) => (props.visible ? "0" : "-20vw")};
  background-color: #f7f5f4;
  transition: right 0.5s;
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
