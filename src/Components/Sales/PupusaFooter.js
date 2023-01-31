import React from "react";
import styled from "styled-components";
import Logo from "./assets/pngegg.png";

function PupusaFooter(props) {
  return (
    <FooterContainer>
      <NextSaleSection>
        Next Sale is <br></br>
        July 29, 2023
      </NextSaleSection>
      <LogoSection>
        <img src={Logo} width="120" height="100" alt="" />
        Las Pupusas Marias
      </LogoSection>
      <InfoSection>
        <SaleInfo>
          Address:<br></br>
          1402 N Massasoit ave<br></br>
          Chicago, IL,60651<br></br>
          <br></br>
          Phone Number: (773)540-5200
        </SaleInfo>
        <br></br>
        <Signature>Made by: bryan.diaz</Signature>
      </InfoSection>
    </FooterContainer>
  );
}
export default PupusaFooter;

const SaleInfo = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Signature = styled.div`
  width: 15vh;
  // height: fit-content:
  display: flex;
  justify-content: end;
  font-size: 12px;
  // background-color: blue;
`;

const NextSaleSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red;
  font-size: 30px;
`;

const LogoSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  // background-color: yellow;
`;
const InfoSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  flex-direction: column;
  // background-color: purple;
`;

const FooterContainer = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  background-color: #ae0103;
  font-family: "Josefin Sans", sans-serif;
  color: #f7f5f4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 6px;
`;
