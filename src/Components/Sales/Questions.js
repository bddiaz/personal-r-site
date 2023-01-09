import React from "react";
import styled from "styled-components";

function Questions(props) {
  return (
    <>
      <QuestionsContainer>
        <Header>Questions?</Header>
        <QuestionsBody>
          1. How many pupusas are the minimum?<br></br>
          A: At least 25, maybe 35. Need to verify with Aunts <br></br>{" "}
          <br></br>
          2. Pickups and deliveries?<br></br>
          A: Yes, but for deliveries, we can only do a certain range. Need to
          discuss further with aunt <br></br>
          <br></br>
          3. How far in advance do you have to make an order?<br></br>
          A: My guess would be about 3 days, but maybe a whole week. <br></br>
          {""}
          <br></br>
        </QuestionsBody>
      </QuestionsContainer>
    </>
  );
}
export default Questions;

const QuestionsBody = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  // background-color: red;
  justify-content: start;
  align-items: start;
  font-size: 25px;
  padding-left: 5%;
`;

const Header = styled.div`
  font-size: 32px;
  height: 15%;
  width: 100%;
  display: flex;
  // background-color: blue;
  justify-content: center;
  align-items: center;
`;

const QuestionsContainer = styled.div`
  background-color: #f7f5f4;
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  overflow-y: auto;
  font-family: "Josefin Sans", sans-serif;
`;
