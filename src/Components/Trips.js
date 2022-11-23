import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Trips() {
  const navigate = useNavigate();
  return (
    <BodySpace>
      <div>
        <h1> Trips </h1>
        <StyledList>
          <li>
            <p> Trip 1</p>
          </li>
          <li>
            <p> Trip 2</p>
          </li>
        </StyledList>
        <button
          type="button"
          onClick={() => {
            navigate("/trips/newTrip");
          }}
        >
          {" "}
          Add a trip
        </button>
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
