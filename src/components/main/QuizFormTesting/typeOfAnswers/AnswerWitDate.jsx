import React, { useRef } from "react";
import styled from "styled-components";
import FlexBox from "../../../UI/Flexbox";
import { MdDateRange } from "react-icons/md";

const AnswerWitDate = () => {
  const dateRef = useRef();
  return (
    <Wrapper>
      <input type="date" ref={dateRef} name="date" id="" />
    </Wrapper>
  );
};

export default AnswerWitDate;
const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  padding: 20px 0 20px;
  width: 400px;
  padding-left: 50px;
  & input {
    width: 200px;
    outline: none;
    border: none;
    border-bottom-style: ridge;
    color: grey;
  }
`;
