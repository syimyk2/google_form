import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { testingActions } from "../../../../store/testingSlice";

export const SingleAnswerWrapper = ({ type, id, title, question }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const saveInputValueHandler = () => {
    let enteredValue =inputRef.current.value
    dispatch(testingActions.saveInputsValue({question, enteredValue}))
    inputRef.current.value =''
  };
  return (
    <Wrapper type={type}>
      <p>{title}</p>
      <input
        type={type}
        name="singleanswer"
        ref={inputRef}
        onBlur={saveInputValueHandler}
        id={id}
        required
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px 0 20px;
  width: 400px;
  padding-left: 50px;
  color: grey;
  & input {
    width: 200px;
    outline: none;
    border: none;
    border-bottom-style: ridge;
    color: grey;
  }
`;
