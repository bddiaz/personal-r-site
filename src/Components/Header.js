import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <HeaderSpace>
        <HeaderNav>
          <NavItem>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              Home{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link style={{ textDecoration: "none" }} to="/Christmas">
              Christmas{" "}
            </Link>
          </NavItem>
          <NavItem>Projects</NavItem>
        </HeaderNav>
      </HeaderSpace>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #efefd0;
  display: flex;
  justify-content: flex-end;
  border-color: black;
`;

const HeaderSpace = styled.div`
  width: 35%;
  background-color: #efefd0;
  display: flex;
  justify-content: center;
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.p`
  color: #1a659e;
`;
