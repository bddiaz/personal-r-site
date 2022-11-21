import React from "react";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";

export default function Trips() {
  return (
    <BodySpace>
      <div>
        <h1> Trips </h1>
        <StyledList>
          <li>
            <Link to="trip1"> Trip 1</Link>
          </li>
          <li>
            <Link to="trip2"> Trip 2</Link>
          </li>
        </StyledList>
      </div>
    </BodySpace>
  );
}

const BodySpace = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  background-color: #efefd0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const StyledList = styled.ul`
  list-style: none;
`;
