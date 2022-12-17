import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./pngegg.png";

function PupusaHeader(props) {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <div className="imgCnt">
            <img src={Logo} width="70" height="60" alt="" />
          </div>

          <StyledName> Las Pupusas Marias</StyledName>
        </LogoContainer>

        <NavContainer>
          <Nav>
            <NavItem>
              <StyledNavLink to="/pupusas"> Menu </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink>About Us </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink> Questions </StyledNavLink>
            </NavItem>
          </Nav>
        </NavContainer>

        <OrderContainer>
          <OrderButton type="button">YOUR CART</OrderButton>
        </OrderContainer>
      </HeaderContainer>
    </>
  );
}
export default PupusaHeader;

const StyledName = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 20px;
  // padding: 4%;
  width: 50%;
  // background-color: blue;
`;

const OrderButton = styled.button`
  width: 70%;
  background-color: #ae0103;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  font-family: "Josefin Sans", sans-serif;
  display: inline-block;
  border-radius: 12px;
  color: #f7f2dd;
  border: none;
  padding: 2px;
  &:hover {
    transform: scale(105%);
    transition: all 0.1s;
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 23px;
`;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #f7f5f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ab5911;
  a {
    color: #ab5911;
  }
`;

const LogoContainer = styled.div`
  width: 20%;
  height: 100%;
  // padding-left: 3%;
  display: flex;
  justify-content: space-evenly;
  vertical-align: center;
  // background-color: red;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: red;
`;

const OrderContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: red;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  // background-color: purple;
`;

const NavItem = styled.div`
  border-radius: 5px;
  // background-color: blue;
  padding: 4px;
  &:hover {
    background-color: #ae0103;
    color: #f7f5f4;
    a {
      color: #f7f5f4;
    }
    transition: all 0.1s;
  }
`;
