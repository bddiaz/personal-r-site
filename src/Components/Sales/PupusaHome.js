import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PupusaHome(props) {
  return (
    <>
      <HeaderContainer>
        <LogoContainer> logo will go here</LogoContainer>

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
          {" "}
          <OrderButton type="button">Order </OrderButton>
        </OrderContainer>
      </HeaderContainer>

      <BodyContainer></BodyContainer>
    </>
  );
}
export default PupusaHome;

const OrderButton = styled.button`
  width: 70%;
  height: 40%;
  background-color: red;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  display: inline-block;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #6b544a;
  font-family: Sans-serif;
  font-size: 23px;

  &:hover {
    color: #6b544a;
  }
`;

const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #f7f5f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 20%;
`;

const NavContainer = styled.div`
  width: 40%;
`;

const OrderContainer = styled.div`
  width: 20%;
`;

const BodyContainer = styled.div`
  background-color: #f7f2dd;
  height: 90vh;
  width: 100%;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.p`
  border-radius: 5px;
  padding: 4px;
  &:hover {
    background-color: #f7f2dd;
  }
`;
