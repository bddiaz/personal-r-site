import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PupusaHeader from "./PupusaHeader.js";
import PupusaFooter from "./PupusaFooter.js";
import Banner from "./assets/pupusas1.jpg";
import Menu from "./PupusaMenu.js";
import ExpandedItem from "./ExpandedItem.js";
import Cart from "./Cart.js";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs.js";
import Questions from "./Questions.js";
import Checkout from "./Checkout.js";
import CostumerInfo from "./CostumerInfo.js";

function PupusaHome(props) {
  const [visible, setVisible] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    title: "",
    image: null,
    description: "",
    index: 0,
    price: 0,
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
  const [isOrdering, setIsOrdering] = useState(false);
  //useEffect for updating totals

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < currentOrder.length; i++) {
      total += currentOrder[i].quantity;
    }
    setItemsTotal(total);
  }, [currentOrder]);

  //Functions for expanded items

  function handleAddToCart(order) {
    let copy = currentOrder;

    let cost = currentOrder[order.index].cost;
    cost += order.count * 3;
    copy[order.index] = {
      index: order.index,
      item: order.item,
      quantity: order.count + currentOrder[order.index].quantity,
      cost: cost,
    };

    setCurrentOrder((prev) => copy);
    let total = 0;
    for (let i = 0; i < currentOrder.length; i++) {
      total += currentOrder[i].quantity;
    }
    setItemsTotal((prev) => total);
  }

  function handleItemSelect(info) {
    setCurrentSelected(info);
    setVisible((value) => !value);
  }

  function handleCloseSelected() {
    setVisible((value) => !value);
  }

  //Functions for working with Cart (adjusting items, continueing to checkout, etc.)

  function handleViewCart() {
    setViewCart((prev) => !prev);
  }

  function handleRemove(index) {
    let copy = [...currentOrder];
    copy[index] = { index: index, quantity: 0, item: "", cost: 0 };
    console.log(copy);
    setCurrentOrder((prev) => copy);
  }

  function addQuantity(index) {
    let copy = [...currentOrder];
    let newQuant = currentOrder[index].quantity + 1;
    let newCost = newQuant * 3;
    copy[index] = {
      index: index,
      quantity: newQuant,
      item: currentOrder[index].item,
      cost: newCost,
    };
    setCurrentOrder((prev) => copy);
  }

  function delQuantity(index) {
    let copy = [...currentOrder];
    let newQuant = currentOrder[index].quantity - 1;
    let newCost = newQuant * 3;
    copy[index] = {
      index: index,
      quantity: newQuant,
      item: currentOrder[index].item,
      cost: newCost,
    };
    setCurrentOrder((prev) => copy);
  }

  return (
    <>
      <ExpandedItem
        visible={visible}
        handleCloseSelected={handleCloseSelected}
        info={currentSelected}
        handleAddToCart={handleAddToCart}
      ></ExpandedItem>
      <Cart
        active={itemsTotal > 0 ? true : false}
        visible={viewCart}
        handleClose={handleViewCart}
        currentOrder={currentOrder}
        total={itemsTotal}
        handleRemove={handleRemove}
        addQuantity={addQuantity}
        delQuantity={delQuantity}
      ></Cart>
      <PupusaHeader
        visible={viewCart}
        itemsTotal={itemsTotal}
        handleViewCart={handleViewCart}
      />

      <Routes>
        <Route path="/About" element={<AboutUs />}></Route>
        <Route path="/Questions" element={<Questions />}></Route>
        <Route
          path="/Review"
          element={
            <Checkout
              currentOrder={currentOrder}
              handleRemove={handleRemove}
              total={itemsTotal}
              delQuantity={delQuantity}
              addQuantity={addQuantity}
            />
          }
        ></Route>
        <Route path="/ReviewContd" element={<CostumerInfo currentOrder={currentOrder} />}></Route>
        <Route
          path="/"
          element={
            <>
              <HeroContainer>
                <HeroText>Pupusas de las hermanas Marias</HeroText>
                <HeroSubText> Hechas en casa </HeroSubText>
              </HeroContainer>
              <MenuHider>Begin placing your order below</MenuHider>
              <BodyContainer>
                <Menu handleItemSelect={handleItemSelect} ></Menu>
              </BodyContainer>
            </>
          }
        ></Route>
      </Routes>

      <PupusaFooter></PupusaFooter>
    </>
  );
}
export default PupusaHome;

const MenuHider = styled.div`
  height:120px;
  width: 100%;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  background-color: #D2C79B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F7F5F4;
`

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
  transition: background-size 0.5s ease-out;
  &:hover {
    background-size: 102%;
    // transition: background-size 1s ease-out;
  }
`;

const BodyContainer = styled.div`
  background-color: #f7f5f4;
  height: fit-content;
  width: 100%;
  padding: 1%;
`;
