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
  gap: 10px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  justify-content: space-around;
`;
