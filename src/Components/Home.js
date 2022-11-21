import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <IntroSpace>
        <IntroContainer
          onClick={() => {
            navigate("/trips");
          }}
        >
          <p> Click this box to see your trips! </p>
        </IntroContainer>
      </IntroSpace>
    </>
  );
}

export default Home;

const IntroSpace = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  background-color: #efefd0;
  justify-content: left;
  alight-items: center;
`;

const IntroContainer = styled.div`
  margin-top: 10vh;
  margin-left: 10vh;
  height: 40%;
  width: 50%;
  background-color: #004e89;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
