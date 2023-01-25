import React from "react";
import CartItem from "./CartItem.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Checkout(props) {
  const navigate = useNavigate();

  function handleRemove(index) {
    props.handleRemove(index);
  }

  function handleContinue() {
    navigate("/pupusas/ReviewContd");
  }

  function handleKeepShopping() {
    navigate("/pupusas/");
  }

  return (
    <>
      <ReviewContainer>
        <ReviewHeaderContainer>
          <ReviewHeader> Review Your Order</ReviewHeader>
        </ReviewHeaderContainer>
        <CheckoutOrderContainer>
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
        </CheckoutOrderContainer>

        <TotalContainer>
          <StandardButton onClick={handleKeepShopping}>
            {" "}
            {"<- "}Keep Shopping
          </StandardButton>
          Your total is: ${props.total * 3}
          <StandardButton onClick={handleContinue}> Continue</StandardButton>
        </TotalContainer>
      </ReviewContainer>
    </>
  );
}
export default Checkout;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f5f4;
`;

const ReviewHeader = styled.div`
  font-size: 30px;
  font-family: "Josefin Sans", sans-serif;
`;

const ReviewHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 11vh;
  min-height: 100px;
  justify-content: start;
  align-items: center;
  padding-left: 10%;
`;

const StandardButton = styled.button`
  width: 220px;
  background-color: #ae0103;
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

const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 12vh;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  font-family: "Josefin Sans", sans-serif;
`;

const CheckoutOrderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 65vh;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 2px;
`;
