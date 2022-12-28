import { React, useState } from "react";
import MenuItem from "./MenuItem.js";
import styled from "styled-components";
import Pupusa1 from "./assets/pupusaItem2.webp";
import Pupusa2 from "./assets/Loroco-Pupusa.jpg";

function Menu(props) {
  function handleClick() {
    props.handleClick();
  }

  const [order, setOrder] = useState([
    { type: "revuelta", quantity: 0, index: 0 },
    { type: "loroco", quantity: 0, index: 1 },
    { type: "frijol", quantity: 0, index: 2 },
    { type: "chicarron", quantity: 0, index: 3 },
    { type: "jalapeño", quantity: 0, index: 4 },
    { type: "espinaca", quantity: 0, index: 5 },
  ]);

  const menuItems = [
    {
      title: "Revuelta",
      index: 0,
      image: Pupusa1,
      description:
        "Chicharron, queso y frijoles. Mixed (pork, cheese and beans)",
    },
    {
      title: "Loroco con Queso",
      index: 1,
      image: Pupusa2,
      description: "Pupusa con loroco y queso",
    },
    {
      title: "Frijol con  Queso",
      index: 2,
      image: Pupusa1,
      description: "Pupusa de frijol y queso",
    },
    {
      title: "Chicharron con Queso",
      index: 3,
      image: Pupusa2,
      description: "Pupusa con chicharron y queso",
    },
    {
      title: "Jalapeño con queso",
      index: 4,
      image: Pupusa1,
      description: "Pupusa con Jalapeño y queso",
    },
    {
      title: "Espinaca con Queso",
      index: 5,
      image: Pupusa2,
      description: "Pupusa con espinaca y queso",
    },
  ];

  return (
    <>
      <MenuContainer>
        <MenuItem itemInfo={menuItems[0]} handleClick={handleClick}></MenuItem>
        <MenuItem itemInfo={menuItems[1]} handleClick={handleClick}></MenuItem>
        <MenuItem itemInfo={menuItems[2]} handleClick={handleClick}></MenuItem>
        <MenuItem itemInfo={menuItems[3]} handleClick={handleClick}></MenuItem>
        <MenuItem itemInfo={menuItems[4]} handleClick={handleClick}></MenuItem>
        <MenuItem itemInfo={menuItems[5]} handleClick={handleClick}></MenuItem>
      </MenuContainer>
    </>
  );
}
export default Menu;

const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
  display: grid;
  grid-template-columns: minmax(200px, 800px) minmax(200px, 800px);
  grid-auto-rows: 200px;
  justify-content: center;
  align-content: center;
  gap: 35px;
`;
