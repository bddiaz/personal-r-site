import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function TripForm(props) {
  const cityRef = useRef(null);
  const distanceRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add a trip</h2>
      <form>
        <InputContainer>
          <input placeholder="Enter city name" type="text" ref={cityRef} />
          <input
            placeholder="Enter distance traveled"
            type="text"
            ref={distanceRef}
          />
          <button type="button">Submit</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            Return{" "}
          </button>
        </InputContainer>
      </form>
    </div>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
