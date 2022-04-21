import React, { useRef } from "react";
import styled from "styled-components";
import FlexBox from "../../../UI/Flexbox";
import { MdDateRange } from "react-icons/md";

export const SingleAnswerWrapper = ({type,id, title }) => {
  const dateRef = useRef();
  return (
    <Wrapper type={type}>
      <p>{title}</p>
      <input type={type} ref={dateRef} name="singleanswer" id={id} />
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
