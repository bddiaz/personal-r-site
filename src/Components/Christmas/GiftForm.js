import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function GiftForm(props) {
  let nameRef = useRef();
  let relationRef = useRef();
  let idea1Ref = useRef();
  let idea2Ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let formValues = {
      name: nameRef.current.value,
      relation: relationRef.current.value,
      ideas: [idea1Ref.current.value, idea2Ref.current.value],
    };
    props.handleSubmit(formValues);
    nameRef.current.value = "";
    relationRef.current.value = "";
    idea1Ref.current.value = "";
    idea2Ref.current.value = "";
  }

  return (
    <FormContainer>
      <StyledHeader> Add a new gift idea</StyledHeader>
      <form onSubmit={handleSubmit}>
        <StyledInput>
          <StyledLabel> Name</StyledLabel>
          <input type="text" ref={nameRef} required />
        </StyledInput>
        <StyledInput>
          <StyledLabel> Relation</StyledLabel>
          <select ref={relationRef} required>
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="Mother"> Mother </option>
            <option value="Father"> Father </option>
            <option value="Sister"> Sister</option>
            <option value="Brother"> Brother</option>
            <option value="Uncle"> Uncle</option>
            <option value="Aunt"> Brother</option>
            <option value="Friend"> Friend</option>
            <option value="Special Other"> Special other</option>
          </select>
        </StyledInput>

        <StyledInput>
          <StyledLabel> Idea 1</StyledLabel>
          <input type="text" ref={idea1Ref} required />
        </StyledInput>
        <StyledInput>
          <StyledLabel> Idea 2 </StyledLabel>
          <input type="text" ref={idea2Ref} required />
        </StyledInput>
        <StyledInput>
          <button type="button"> Add another idea</button>
          <button type="submit"> Submit</button>
        </StyledInput>
      </form>
    </FormContainer>
  );
}

const StyledInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h2`
  color: #1a659e;
  font-family: Papyrus;
`;

const StyledLabel = styled.label`
  color: #1a659e;
  font-family: Papyrus;
`;
