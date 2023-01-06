import { React, useState } from "react";
import styled from "styled-components";

function OrderBar(props) {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter((prev) => prev + 1);
  }

  function handleDel() {
    setCounter((prev) => (counter > 0 ? prev - 1 : 0));
  }

  function handleAddToCart() {
    props.handleAddToCart(counter);
    setCounter(0);
  }

  return (
    <OrderBarContainer>
      <CounterContainer>
        <CounterButton onClick={handleDel}>-</CounterButton>
        <Count>{counter}</Count>
        <CounterButton onClick={handleAdd}>+</CounterButton>
      </CounterContainer>
      <AddContainer onClick={handleAddToCart}>
        <AddText> Add to Cart</AddText>
        <PriceText> {props.price}</PriceText>
      </AddContainer>
    </OrderBarContainer>
  );
}

const AddText = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
`;

const PriceText = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
`;

const Count = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
`;

const CounterButton = styled.div`
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

const CounterContainer = styled.div`
  width: 30%;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AddContainer = styled.div`
  width: 60%;
  padding: 5px;
  border-radius: 3px;
  height: 100%;
  background-color: #ae0103;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #f7f5f4;
  cursor: pointer;
`;

const OrderBarContainer = styled.div`
  // position: relative;
  padding-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  box-shadow: 0px -3px 2px rgba(50, 50, 50, 0.15);
  // background-color: #c4511a;
`;
export default OrderBar;
