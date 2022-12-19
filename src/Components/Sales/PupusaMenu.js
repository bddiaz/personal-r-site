import { React, useState } from "react";
import MenuItem from "./MenuItem.js";
import styled from "styled-components";
import Pupusa1 from "./assets/pupusaItem2.webp";

function Menu(props) {
  const menuItems = [{ title: "Frijol con Queso", image: Pupusa1 }];

  return (
    <>
      <MenuContainer>
        <MenuItem
          title={menuItems[0].title}
          image={menuItems[0].image}
        ></MenuItem>
        <MenuItem
          title={menuItems[0].title}
          image={menuItems[0].image}
        ></MenuItem>
        <MenuItem
          title={menuItems[0].title}
          image={menuItems[0].image}
        ></MenuItem>
        <MenuItem
          title={menuItems[0].title}
          image={menuItems[0].image}
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;
