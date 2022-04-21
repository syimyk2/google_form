import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FlexBox from "../../../UI/Flexbox";

export const AnswerWithText = (id, onBlur, onChange, defaultValue) => {
  const dispatch = useDispatch();
  const textAnswerRef = useRef();
  const saveTextAnswerHandler = () => {
    //
  };
  return (
    <Wrapper>
      <textarea
        onBlur={() => saveTextAnswerHandler(id)}
        ref={textAnswerRef}
        name="anserText"
        placeholder={"Мой ответ"}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  textarea {
    overflow: auto;
    resize: none;
    font-size: 14px;
    font-weight: 500;
    font-family: Georgia, "Times New Roman", Times, serif;
    -moz-appearance: none;
    align-items: center;
    display: block;
    width: 835px;
    height: auto;
    overflow-y: none scroll;
    border: none;
    outline: none;
    border-bottom: 1px dashed #b2aaaae7;
    background-color: #bfbaba2a;
    padding: 20px 30px 0;
    &:hover {
      background-color: #491c7d21;
    }
  }
`;
