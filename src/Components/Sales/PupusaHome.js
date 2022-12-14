import React from "react";
import styled from "styled-components";
import { NavBar } from "react-bootstrap";

function PupusaHome(props) {
  return (
    <>
      <HeaderContainer>
        <LogoContainer> logo will go here</LogoContainer>

        <NavContainer>nav bar will go here</NavContainer>

        <OrderContainer> order button goes</OrderContainer>
      </HeaderContainer>

      <BodyContainer></BodyContainer>
    </>
  );
}
export default PupusaHome;

const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #3b86f2;
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
  background-color: #f3f6fc;
  height: 90vh;
  width: 100%;
`;
