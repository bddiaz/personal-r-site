import { React, useState } from "react";
import MenuItem from "./MenuItem.js";
import styled from "styled-components";
import Pupusa1 from "./assets/pupusaItem2.webp";
import Pupusa2 from "./assets/Loroco-Pupusa.jpg";

function Menu(props) {
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
      image: Pupusa1,
      description:
        "Chicharron, queso y frijoles. Mixed (pork, cheese and beans)",
    },
    {
      title: "Loroco con Queso",
      image: Pupusa2,
      description: "Pupusa con loroco y queso",
    },
    {
      title: "Frijol con  Queso",
      image: Pupusa1,
      description: "Pupusa de frijol y queso",
    },
    {
      title: "Chicharron con Queso",
      image: Pupusa2,
      description: "Pupusa con chicharron y queso",
    },
    {
      title: "Jalapeño con queso",
      image: Pupusa1,
      description: "Pupusa con Jalapeño y queso",
    },
    {
      title: "Espinaca con Queso",
      image: Pupusa2,
      description: "Pupusa con espinaca y queso",
    },
  ];

  return (
    <>
      <MenuContainer>
        <MenuItem
          title={menuItems[0].title}
          image={menuItems[0].image}
          description={menuItems[0].description}
        ></MenuItem>
        <MenuItem
          title={menuItems[1].title}
          image={menuItems[1].image}
          description={menuItems[1].description}
        ></MenuItem>
        <MenuItem
          title={menuItems[2].title}
          image={menuItems[2].image}
          description={menuItems[2].description}
        ></MenuItem>
        <MenuItem
          title={menuItems[3].title}
          image={menuItems[3].image}
          description={menuItems[3].description}
        ></MenuItem>
        <MenuItem
          title={menuItems[4].title}
          image={menuItems[4].image}
          description={menuItems[4].description}
        ></MenuItem>
        <MenuItem
          title={menuItems[5].title}
          image={menuItems[5].image}
          description={menuItems[5].description}
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
  grid-template-columns: minmax(200px, 800px) minmax(200px, 800px);
  grid-auto-rows: 200px;
  justify-content: center;
  align-content: center;
  gap: 35px;
`;
