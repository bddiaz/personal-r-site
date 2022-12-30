import { React, useState } from "react";
import MenuItem from "./MenuItem.js";
import styled from "styled-components";
import Pupusa1 from "./assets/pupusaItem2.webp";
import Pupusa2 from "./assets/Loroco-Pupusa.jpg";

function Menu(props) {
  function handleItemSelect(index) {
    const info = {
      title: menuItems[index].title,
      image: menuItems[index].image,
      description: menuItems[index].description,
      index: index,
      price: menuItems[index].price,
    };
    props.handleItemSelect(info);
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
      price: "$3.00",
    },
    {
      title: "Loroco con Queso",
      index: 1,
      image: Pupusa2,
      description: "Pupusa con loroco y queso",
      price: "$3.00",
    },
    {
      title: "Frijol con  Queso",
      index: 2,
      image: Pupusa1,
      description: "Pupusa de frijol y queso",
      price: "$3.00",
    },
    {
      title: "Chicharron con Queso",
      index: 3,
      image: Pupusa2,
      description: "Pupusa con chicharron y queso",
      price: "$3.00",
    },
    {
      title: "Jalapeño con queso",
      index: 4,
      image: Pupusa1,
      description: "Pupusa con Jalapeño y queso",
      price: "$3.00",
    },
    {
      title: "Espinaca con Queso",
      index: 5,
      image: Pupusa2,
      description: "Pupusa con espinaca y queso",
      price: "$3.00",
    },
  ];

  return (
    <>
      <MenuContainer>
        <MenuItem
          itemInfo={menuItems[0]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
        <MenuItem
          itemInfo={menuItems[1]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
        <MenuItem
          itemInfo={menuItems[2]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
        <MenuItem
          itemInfo={menuItems[3]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
        <MenuItem
          itemInfo={menuItems[4]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
        <MenuItem
          itemInfo={menuItems[5]}
          handleItemSelect={handleItemSelect}
        ></MenuItem>
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
  grid-template-columns: minmax(100px, 900px) minmax(100px, 900px);
  //grid-auto-rows: 200px;
  justify-content: center;
  align-content: center;
  gap: 30px;
`;
