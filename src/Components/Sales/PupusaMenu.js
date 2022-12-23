import { React, useState } from "react";
import MenuItem from "./MenuItem.js";
import styled from "styled-components";
import Pupusa1 from "./assets/pupusaItem2.webp";
import Pupusa2 from "./assets/Loroco-Pupusa.jpg";

function Menu(props) {
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
  //  background-color: blue;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  justify-content: space-around;
`;
