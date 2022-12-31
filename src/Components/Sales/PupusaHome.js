import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";
import PupusaFooter from "./PupusaFooter.js";
import Banner from "./assets/pupusas1.jpg";
import Menu from "./PupusaMenu.js";
import ExpandedItem from "./ExpandedItem.js";

function PupusaHome(props) {
  const [visible, setVisible] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    title: null,
    image: null,
    description: null,
    index: null,
    price: null,
  });

  const [itemsTotal, setItemsTotal] = useState(0);

  const [currentOrder, setCurrentOrder] = useState([
    { index: 0, quantity: 0, item: "", cost: 0 },
    { index: 1, quantity: 0, item: "", cost: 0 },
    { index: 2, quantity: 0, item: "", cost: 0 },
    { index: 3, quantity: 0, item: "", cost: 0 },
    { index: 4, quantity: 0, item: "", cost: 0 },
    { index: 5, quantity: 0, item: "", cost: 0 },
  ]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i++; i < currentOrder.length) {
      total += currentOrder[i].quantity;
    }
    setItemsTotal(total);
  }, []);

  function handleAddToCart(order) {
    let copy = currentOrder;
    // console.log(itemsTotal);

    if (copy[order.index].quantity == 0) {
      let cost = order.count * 3;
      copy[order.index] = {
        index: order.index,
        item: order.item,
        quantity: order.count,
        cost: cost,
      };
      cost = 0;
    } else {
      let cost = currentOrder[order.index].cost;
      cost += order.count * 3;
      copy[order.index] = {
        index: order.index,
        item: order.item,
        quantity: order.count + currentOrder[order.index].quantity,
        cost: cost,
      };
    }
    setCurrentOrder((prev) => copy);
    let total = 0;
    for (let i = 0; i < currentOrder.length; i++) {
      total += currentOrder[i].quantity;
    }
    console.log(total);
    setItemsTotal((prev) => total);
    //console.log(itemsTotal);
  }

  function handleItemSelect(info) {
    setCurrentSelected(info);
    setVisible((value) => !value);
  }

  function handleCloseSelected() {
    setVisible((value) => !value);
  }

  return (
    <>
      <ExpandedItem
        visible={visible}
        handleCloseSelected={handleCloseSelected}
        info={currentSelected}
        handleAddToCart={handleAddToCart}
      ></ExpandedItem>
      <PupusaHeader itemsTotal={itemsTotal} />

      <HeroContainer>
        <HeroText>Pupusas de las hermanas Marias</HeroText>
        <HeroSubText> Hechas en casa </HeroSubText>
      </HeroContainer>

      <BodyContainer>
        <Menu handleItemSelect={handleItemSelect}></Menu>
      </BodyContainer>
    </>
  );
}
export default PupusaHome;

const HeroSubText = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  color: #f7f5f4;
`;

const HeroText = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  color: #f7f5f4;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    background-size: 102%;
    transition: background-size 1s;
  }
`;

const BodyContainer = styled.div`
  background-color: #f7f5f4;
  height: fit-content;
  width: 100%;
  padding: 1%;
`;
