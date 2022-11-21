import React from "react";
import styled from "styled-components";

export default function Trip(props) {
  return (
    <BodySpace>
      <h2> Trip information</h2>
      <p>
        City: {props.city} <br />
        Distance: {props.distance}
      </p>
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
